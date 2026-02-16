-- Seed data for development environment

-- Sample verified foods
INSERT INTO public.foods (name, brand, serving_size, serving_unit, calories_per_serving, protein_per_serving, carbs_per_serving, fat_per_serving, fiber_per_serving, category, is_verified) VALUES
('Brown Rice', 'Generic', 100, 'g', 123, 2.6, 23, 0.9, 1.8, 'grains', true),
('Chicken Breast', 'Generic', 100, 'g', 165, 31, 0, 3.6, 0, 'protein', true),
('Broccoli', 'Generic', 100, 'g', 34, 2.8, 7, 0.4, 2.6, 'vegetables', true),
('Salmon', 'Generic', 100, 'g', 208, 25, 0, 12, 0, 'protein', true),
('Sweet Potato', 'Generic', 100, 'g', 86, 1.6, 20, 0.1, 3, 'vegetables', true),
('Greek Yogurt', 'Generic', 100, 'g', 59, 10, 3.6, 0.4, 0, 'dairy', true),
('Oats', 'Generic', 100, 'g', 389, 16.9, 66.3, 6.9, 10.6, 'grains', true),
('Spinach', 'Generic', 100, 'g', 23, 2.9, 3.6, 0.4, 2.2, 'vegetables', true),
('Banana', 'Generic', 100, 'g', 89, 1.1, 23, 0.3, 2.6, 'fruits', true),
('Almonds', 'Generic', 100, 'g', 579, 21.2, 21.6, 49.9, 12.5, 'nuts', true);

-- Sample workout templates (public templates users can copy)
INSERT INTO public.workouts (name, description, workout_type, duration_minutes, difficulty_level, is_template, user_id) VALUES
('Beginner Full Body', 'Complete full body workout for beginners', 'strength', 45, 'beginner', true, NULL),
('HIIT Cardio Blast', 'High-intensity interval training session', 'cardio', 30, 'intermediate', true, NULL),
('Yoga Flow Morning', 'Gentle yoga flow to start your day', 'flexibility', 20, 'beginner', true, NULL),
('Upper Body Strength', 'Focus on chest, back, shoulders, and arms', 'strength', 50, 'intermediate', true, NULL),
('Core Power', 'Intense core strengthening workout', 'strength', 25, 'advanced', true, NULL);

-- Sample public workout plan
DO $$
DECLARE
    plan_id UUID;
    full_body_workout_id UUID;
    cardio_workout_id UUID;
    yoga_workout_id UUID;
BEGIN
    -- Get the workout IDs we just created
    SELECT id INTO full_body_workout_id FROM public.workouts WHERE name = 'Beginner Full Body' AND is_template = true;
    SELECT id INTO cardio_workout_id FROM public.workouts WHERE name = 'HIIT Cardio Blast' AND is_template = true;
    SELECT id INTO yoga_workout_id FROM public.workouts WHERE name = 'Yoga Flow Morning' AND is_template = true;
    
    -- Create the workout plan
    INSERT INTO public.workout_plans (name, description, category, difficulty_level, duration_weeks, workouts_per_week, target_goals, is_public, user_id, created_by)
    VALUES ('30-Day Fitness Starter', 'Perfect starter plan for fitness beginners', 'mixed', 'beginner', 4, 3, ARRAY['general_fitness', 'strength'], true, NULL, NULL)
    RETURNING id INTO plan_id;
    
    -- Week 1
    INSERT INTO public.workout_plan_days (workout_plan_id, week_number, day_number, workout_id, notes) VALUES
    (plan_id, 1, 1, full_body_workout_id, 'Start slow, focus on form'),
    (plan_id, 1, 2, NULL, NULL), -- rest day
    (plan_id, 1, 3, cardio_workout_id, 'Low intensity to start'),
    (plan_id, 1, 4, NULL, NULL), -- rest day
    (plan_id, 1, 5, yoga_workout_id, 'Recovery and flexibility'),
    (plan_id, 1, 6, NULL, NULL), -- rest day
    (plan_id, 1, 7, NULL, NULL); -- rest day
    
    -- Week 2 (similar pattern)
    INSERT INTO public.workout_plan_days (workout_plan_id, week_number, day_number, workout_id, notes) VALUES
    (plan_id, 2, 1, full_body_workout_id, 'Increase intensity slightly'),
    (plan_id, 2, 2, NULL, NULL),
    (plan_id, 2, 3, cardio_workout_id, 'Push a bit harder'),
    (plan_id, 2, 4, NULL, NULL),
    (plan_id, 2, 5, yoga_workout_id, 'Focus on breathing'),
    (plan_id, 2, 6, NULL, NULL),
    (plan_id, 2, 7, NULL, NULL);
END $$;