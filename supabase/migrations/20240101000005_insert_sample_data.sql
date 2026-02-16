-- Insert sample exercise data
INSERT INTO public.exercises (name, description, category, muscle_groups, equipment, difficulty_level, instructions, tips, calories_per_minute) VALUES
-- Strength exercises
('Push-ups', 'Classic bodyweight chest exercise', 'strength', ARRAY['chest', 'triceps', 'shoulders'], ARRAY['none'], 'beginner', 
 ARRAY['Start in plank position', 'Lower chest to floor', 'Push back up', 'Repeat'], 
 'Keep core tight and maintain straight line from head to heels', 8.0),

('Squats', 'Fundamental lower body exercise', 'strength', ARRAY['quadriceps', 'glutes', 'hamstrings'], ARRAY['none'], 'beginner',
 ARRAY['Stand with feet shoulder-width apart', 'Lower hips back and down', 'Keep chest up', 'Return to standing'],
 'Keep weight on heels and knees tracking over toes', 6.5),

('Pull-ups', 'Upper body pulling exercise', 'strength', ARRAY['lats', 'biceps', 'rhomboids'], ARRAY['pull-up bar'], 'intermediate',
 ARRAY['Hang from bar with overhand grip', 'Pull chin above bar', 'Lower with control', 'Repeat'],
 'Engage core and avoid swinging', 10.0),

('Deadlifts', 'Compound posterior chain exercise', 'strength', ARRAY['hamstrings', 'glutes', 'lower back'], ARRAY['barbell'], 'intermediate',
 ARRAY['Stand with feet hip-width apart', 'Hinge at hips, lower bar', 'Drive hips forward to stand', 'Control the descent'],
 'Keep bar close to body and maintain neutral spine', 8.5),

-- Cardio exercises
('Running', 'Cardiovascular endurance exercise', 'cardio', ARRAY['legs', 'core'], ARRAY['none'], 'beginner',
 ARRAY['Start with warm-up walk', 'Maintain steady pace', 'Land midfoot', 'Cool down with walking'],
 'Start slow and gradually increase pace and distance', 12.0),

('Jump Rope', 'High-intensity cardio exercise', 'cardio', ARRAY['calves', 'core'], ARRAY['jump rope'], 'intermediate',
 ARRAY['Hold handles at hip level', 'Jump lightly on balls of feet', 'Keep elbows close to body', 'Maintain rhythm'],
 'Start with short intervals and build endurance', 15.0),

('Burpees', 'Full-body explosive exercise', 'cardio', ARRAY['full body'], ARRAY['none'], 'advanced',
 ARRAY['Start standing', 'Drop to squat, hands on floor', 'Jump back to plank', 'Do push-up', 'Jump forward', 'Jump up'],
 'Focus on form over speed', 18.0),

-- Flexibility/Yoga exercises
('Downward Dog', 'Classic yoga pose for stretching', 'yoga', ARRAY['hamstrings', 'calves', 'shoulders'], ARRAY['yoga mat'], 'beginner',
 ARRAY['Start in plank', 'Lift hips up and back', 'Straighten legs', 'Press palms down', 'Hold position'],
 'Bend knees slightly if hamstrings are tight', 3.0),

('Child''s Pose', 'Restorative yoga pose', 'yoga', ARRAY['back', 'hips'], ARRAY['yoga mat'], 'beginner',
 ARRAY['Kneel on mat', 'Sit back on heels', 'Fold forward, arms extended', 'Rest forehead on mat'],
 'Great for relaxation and stress relief', 2.0),

('Warrior I', 'Standing yoga pose for strength and balance', 'yoga', ARRAY['legs', 'core'], ARRAY['yoga mat'], 'intermediate',
 ARRAY['Step one foot back', 'Turn back foot out 45 degrees', 'Bend front knee', 'Raise arms overhead'],
 'Keep front knee over ankle', 4.0);

-- Insert sample achievements
INSERT INTO public.achievements (name, description, category, criteria, badge_icon, points) VALUES
('First Workout', 'Complete your first workout', 'workout', '{"workouts_completed": 1}', '🏃', 10),
('Week Warrior', 'Complete 7 workouts in one week', 'streak', '{"workouts_per_week": 7}', '🔥', 50),
('Nutrition Tracker', 'Log food for 7 consecutive days', 'nutrition', '{"consecutive_days": 7}', '🥗', 30),
('Progress Pioneer', 'Log your first progress entry', 'progress', '{"progress_logs": 1}', '📊', 15),
('Strength Starter', 'Complete 10 strength training workouts', 'workout', '{"strength_workouts": 10}', '💪', 25),
('Cardio Champion', 'Complete 20 cardio workouts', 'workout', '{"cardio_workouts": 20}', '❤️', 40),
('Flexibility Master', 'Complete 15 yoga or flexibility sessions', 'workout', '{"flexibility_workouts": 15}', '🧘', 35),
('Goal Crusher', 'Achieve your target weight', 'milestone', '{"target_weight_reached": true}', '🎯', 100);

-- Insert sample workout plan
DO $$
DECLARE
    plan_id UUID;
    workout_id UUID;
BEGIN
    -- Create a sample beginner workout plan
    INSERT INTO public.workout_plans (name, description, category, difficulty_level, duration_weeks, workouts_per_week, target_goals, is_public)
    VALUES ('Beginner Full Body', 'A 4-week full body workout plan for beginners', 'strength', 'beginner', 4, 3, ARRAY['general_fitness', 'strength'], true)
    RETURNING id INTO plan_id;
    
    -- Create sample workouts for the plan would go here
    -- This is just the structure - you'd need to create actual workouts first
END $$;

-- Create views for common queries
CREATE VIEW public.user_stats AS
SELECT 
    u.id,
    u.name,
    u.date_joined,
    COUNT(DISTINCT w.id) as total_workouts,
    COUNT(DISTINCT CASE WHEN w.completed_date >= CURRENT_DATE - INTERVAL '7 days' THEN w.id END) as workouts_this_week,
    COUNT(DISTINCT fl.id) as total_food_logs,
    COUNT(DISTINCT pl.id) as progress_entries,
    COUNT(DISTINCT ua.id) as achievements_earned
FROM public.users u
LEFT JOIN public.workouts w ON u.id = w.user_id AND w.is_completed = true
LEFT JOIN public.food_logs fl ON u.id = fl.user_id
LEFT JOIN public.progress_logs pl ON u.id = pl.user_id
LEFT JOIN public.user_achievements ua ON u.id = ua.user_id
GROUP BY u.id, u.name, u.date_joined;

-- Note: Views inherit security from underlying tables with RLS enabled
-- No need to set RLS on views directly