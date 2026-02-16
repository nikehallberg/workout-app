-- Storage bucket for profile pictures
INSERT INTO storage.buckets (id, name, public) VALUES ('avatars', 'avatars', true);

-- Storage bucket for progress photos  
INSERT INTO storage.buckets (id, name, public) VALUES ('progress-photos', 'progress-photos', false);

-- Storage bucket for exercise images/videos
INSERT INTO storage.buckets (id, name, public) VALUES ('exercise-media', 'exercise-media', true);

-- Storage bucket for workout plan images
INSERT INTO storage.buckets (id, name, public) VALUES ('workout-plans', 'workout-plans', true);

-- Create storage policies for avatars bucket
CREATE POLICY "Avatar images are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar" ON storage.objects
FOR UPDATE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar" ON storage.objects
FOR DELETE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for progress photos bucket
CREATE POLICY "Users can view their own progress photos" ON storage.objects
FOR SELECT USING (bucket_id = 'progress-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own progress photos" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'progress-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own progress photos" ON storage.objects
FOR UPDATE USING (bucket_id = 'progress-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own progress photos" ON storage.objects
FOR DELETE USING (bucket_id = 'progress-photos' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for exercise media bucket (public read, authenticated write)
CREATE POLICY "Exercise media is publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'exercise-media');

CREATE POLICY "Authenticated users can upload exercise media" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id = 'exercise-media');

CREATE POLICY "Users can update exercise media they created" ON storage.objects
FOR UPDATE USING (bucket_id = 'exercise-media' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create storage policies for workout plans bucket (public read, authenticated write)
CREATE POLICY "Workout plan images are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'workout-plans');

CREATE POLICY "Authenticated users can upload workout plan images" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id = 'workout-plans');

CREATE POLICY "Users can update workout plan images they created" ON storage.objects
FOR UPDATE USING (bucket_id = 'workout-plans' AND auth.uid()::text = (storage.foldername(name))[1]);