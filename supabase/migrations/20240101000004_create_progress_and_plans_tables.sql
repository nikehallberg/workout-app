-- Create progress tracking table
CREATE TABLE public.progress_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  weight DECIMAL(5,2),
  body_fat_percentage DECIMAL(4,2),
  muscle_mass DECIMAL(5,2),
  measurements JSONB, -- Store body measurements as JSON
  progress_photos TEXT[], -- Array of photo URLs
  notes TEXT,
  mood_rating INTEGER CHECK (mood_rating >= 1 AND mood_rating <= 5),
  energy_level INTEGER CHECK (energy_level >= 1 AND energy_level <= 5),
  sleep_hours DECIMAL(3,1),
  water_intake_liters DECIMAL(4,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, log_date)
);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('workout', 'nutrition', 'progress', 'streak', 'milestone')),
  criteria JSONB, -- JSON object defining achievement criteria
  badge_icon TEXT,
  badge_color TEXT DEFAULT '#4f46e5',
  points INTEGER DEFAULT 10,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user achievements junction table
CREATE TABLE public.user_achievements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  progress_data JSONB, -- Store any relevant progress data
  UNIQUE(user_id, achievement_id)
);

-- Create workout plans table (different from individual workouts)
CREATE TABLE public.workout_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT CHECK (category IN ('strength', 'cardio', 'flexibility', 'yoga', 'mixed')),
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  duration_weeks INTEGER,
  workouts_per_week INTEGER,
  target_goals TEXT[], -- Array of goals this plan targets
  is_public BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create workout plan days table
CREATE TABLE public.workout_plan_days (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  workout_plan_id UUID REFERENCES public.workout_plans(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  day_number INTEGER CHECK (day_number >= 1 AND day_number <= 7),
  workout_id UUID REFERENCES public.workouts(id) ON DELETE CASCADE,
  is_rest_day BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(workout_plan_id, week_number, day_number)
);

-- Enable RLS
ALTER TABLE public.progress_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_plan_days ENABLE ROW LEVEL SECURITY;

-- Policies for progress logs
CREATE POLICY "Users can manage their own progress logs" ON public.progress_logs
  FOR ALL USING (auth.uid() = user_id);

-- Policies for achievements
CREATE POLICY "Anyone can view achievements" ON public.achievements
  FOR SELECT TO anon, authenticated USING (is_active = true);

-- Policies for user achievements
CREATE POLICY "Users can view their own achievements" ON public.user_achievements
  FOR SELECT USING (auth.uid() = user_id);

-- Policies for workout plans
CREATE POLICY "Users can view public workout plans" ON public.workout_plans
  FOR SELECT TO authenticated USING (is_public = true OR user_id = auth.uid());

CREATE POLICY "Users can manage their own workout plans" ON public.workout_plans
  FOR ALL USING (auth.uid() = user_id OR auth.uid() = created_by);

-- Policies for workout plan days
CREATE POLICY "Users can manage their workout plan days" ON public.workout_plan_days
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.workout_plans 
      WHERE id = workout_plan_id AND (user_id = auth.uid() OR created_by = auth.uid())
    )
  );

-- Create triggers for updated_at
CREATE TRIGGER update_progress_logs_updated_at
  BEFORE UPDATE ON public.progress_logs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_workout_plans_updated_at
  BEFORE UPDATE ON public.workout_plans
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Create indexes for performance
CREATE INDEX idx_progress_logs_user_date ON public.progress_logs(user_id, log_date DESC);
CREATE INDEX idx_user_achievements_user_id ON public.user_achievements(user_id);
CREATE INDEX idx_workout_plans_category ON public.workout_plans(category);
CREATE INDEX idx_workout_plans_public ON public.workout_plans(is_public) WHERE is_public = true;
CREATE INDEX idx_workout_plan_days_plan_week ON public.workout_plan_days(workout_plan_id, week_number, day_number);