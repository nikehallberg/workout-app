-- Create foods table for nutrition tracking
CREATE TABLE public.foods (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT,
  barcode TEXT,
  serving_size DECIMAL(8,2),
  serving_unit TEXT DEFAULT 'g',
  calories_per_serving DECIMAL(8,2),
  protein_per_serving DECIMAL(8,2),
  carbs_per_serving DECIMAL(8,2),
  fat_per_serving DECIMAL(8,2),
  fiber_per_serving DECIMAL(8,2),
  sugar_per_serving DECIMAL(8,2),
  sodium_per_serving DECIMAL(8,2),
  category TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create food logs table
CREATE TABLE public.food_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  food_id UUID REFERENCES public.foods(id) ON DELETE CASCADE,
  quantity DECIMAL(8,2) NOT NULL,
  meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  logged_date DATE NOT NULL,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal plans table
CREATE TABLE public.meal_plans (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  target_calories INTEGER,
  target_protein DECIMAL(6,2),
  target_carbs DECIMAL(6,2),
  target_fat DECIMAL(6,2),
  duration_days INTEGER DEFAULT 7,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create meal plan foods junction table
CREATE TABLE public.meal_plan_foods (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  meal_plan_id UUID REFERENCES public.meal_plans(id) ON DELETE CASCADE,
  food_id UUID REFERENCES public.foods(id) ON DELETE CASCADE,
  day_number INTEGER CHECK (day_number >= 1 AND day_number <= 365),
  meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  quantity DECIMAL(8,2) NOT NULL,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.food_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meal_plan_foods ENABLE ROW LEVEL SECURITY;

-- Policies for foods (public read, authenticated users can create)
CREATE POLICY "Anyone can view verified foods" ON public.foods
  FOR SELECT TO anon, authenticated USING (is_verified = true);

CREATE POLICY "Users can view their own foods" ON public.foods
  FOR SELECT TO authenticated USING (auth.uid() = created_by);

CREATE POLICY "Authenticated users can create foods" ON public.foods
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Users can update their own foods" ON public.foods
  FOR UPDATE TO authenticated USING (auth.uid() = created_by);

-- Policies for food logs
CREATE POLICY "Users can manage their own food logs" ON public.food_logs
  FOR ALL USING (auth.uid() = user_id);

-- Policies for meal plans
CREATE POLICY "Users can manage their own meal plans" ON public.meal_plans
  FOR ALL USING (auth.uid() = user_id);

-- Policies for meal plan foods
CREATE POLICY "Users can manage their meal plan foods" ON public.meal_plan_foods
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.meal_plans 
      WHERE id = meal_plan_id AND user_id = auth.uid()
    )
  );

-- Create triggers for updated_at
CREATE TRIGGER update_foods_updated_at
  BEFORE UPDATE ON public.foods
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_meal_plans_updated_at
  BEFORE UPDATE ON public.meal_plans
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Create indexes for performance
CREATE INDEX idx_foods_name ON public.foods(name);
CREATE INDEX idx_foods_category ON public.foods(category);
CREATE INDEX idx_foods_barcode ON public.foods(barcode);
CREATE INDEX idx_food_logs_user_date ON public.food_logs(user_id, logged_date);
CREATE INDEX idx_food_logs_meal_type ON public.food_logs(meal_type);
CREATE INDEX idx_meal_plans_user_id ON public.meal_plans(user_id);
CREATE INDEX idx_meal_plan_foods_plan_day ON public.meal_plan_foods(meal_plan_id, day_number, meal_type);