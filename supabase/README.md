# Supabase Workout App Database

This directory contains the Supabase migrations and configuration for the workout app.

## Getting Started

1. Install Supabase CLI:
```bash
npm install -g @supabase/cli
```

2. Initialize Supabase in your project:
```bash
supabase init
```

3. Link to your remote Supabase project:
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

4. Run migrations:
```bash
supabase db push
```

## Database Schema

### Core Tables

#### `users`
Extended user profile information linked to Supabase Auth users.
- Personal info (name, username, age, height, weight)
- Fitness profile (fitness level, goals)
- Timestamps and status

#### `user_goals`
Junction table for user fitness goals (weight_loss, muscle_gain, etc.)

#### `exercises`
Exercise library with detailed information:
- Basic info (name, description, category)
- Exercise specifics (muscle groups, equipment, difficulty)
- Instructions, tips, and media URLs
- Calorie burn estimates

#### `workouts`
Individual workout sessions:
- Workout metadata (name, type, duration)
- Completion tracking
- Scheduling and progress

#### `workout_exercises`
Junction table linking exercises to workouts with specific parameters:
- Sets, reps, weight, duration
- Rest periods and notes
- Exercise order

#### `foods`
Food database for nutrition tracking:
- Basic food info (name, brand, barcode)
- Nutritional information per serving
- User-contributed and verified foods

#### `food_logs`
Daily food intake tracking:
- Meal type categorization
- Quantity and timing
- Associated with specific foods

#### `meal_plans`
Structured meal planning:
- Plan metadata and targets
- Duration and goals
- User-specific meal plans

#### `meal_plan_foods`
Junction table for meal plan composition:
- Day and meal type organization
- Portion sizes and order

#### `progress_logs`
Comprehensive progress tracking:
- Body measurements and weight
- Progress photos
- Mood, energy, and lifestyle metrics
- Daily logging with unique constraints

#### `achievements`
Gamification system:
- Achievement definitions and criteria
- Badge system with icons and points
- Category-based organization

#### `user_achievements`
User achievement tracking:
- Earned achievements with timestamps
- Progress data storage

#### `workout_plans`
Structured workout programs:
- Multi-week program planning
- Public/private sharing
- Target goals and difficulty levels

#### `workout_plan_days`
Daily workout plan structure:
- Week and day organization
- Rest day management
- Linked to specific workouts

### Storage Buckets

#### `avatars`
- Public read access
- User-specific upload/edit permissions
- Profile picture storage

#### `progress-photos`
- Private user-specific access
- Progress photo storage

#### `exercise-media`
- Public read access
- Authenticated user uploads
- Exercise images and videos

#### `workout-plans`
- Public read access
- Authenticated user uploads
- Workout plan promotional images

### Views

#### `user_stats`
Aggregated user statistics including:
- Total workouts and recent activity
- Food logging activity
- Progress entry counts
- Achievement progress

## Security

All tables implement Row Level Security (RLS) with appropriate policies:
- Users can only access their own data
- Public content (exercises, achievements) available to all
- Proper authentication requirements for data modification

## Features Supported

This schema supports all the features visible in your React components:

- ✅ User authentication and profiles
- ✅ Exercise library and categorization
- ✅ Workout creation and tracking
- ✅ Nutrition logging and meal planning
- ✅ Progress tracking with measurements
- ✅ Achievement/gamification system
- ✅ Workout plan management
- ✅ File storage for images/videos
- ✅ Calorie tracking and targets
- ✅ Flexible food database
- ✅ Multi-week program planning

## Local Development

To run Supabase locally:

```bash
supabase start
```

This will start:
- PostgreSQL database (localhost:54322)
- Supabase Studio (localhost:54323)
- API Gateway (localhost:54321)
- Auth server
- Storage server

## Environment Variables

Add these to your client-side environment:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

For local development:
```env
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=your_local_anon_key
```