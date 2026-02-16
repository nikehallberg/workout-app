import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Auth helpers
export const auth = {
  signUp: (email: string, password: string, metadata?: any) =>
    supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    }),
  
  signIn: (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password }),
  
  signOut: () => supabase.auth.signOut(),
  
  getCurrentUser: () => supabase.auth.getUser(),
  
  onAuthStateChange: (callback: (event: any, session: any) => void) =>
    supabase.auth.onAuthStateChange(callback)
}

// Database helpers
export const db = {
  // Users
  users: {
    get: (id: string) => 
      supabase.from('users').select('*').eq('id', id).single(),
    
    update: (id: string, data: any) =>
      supabase.from('users').update(data).eq('id', id).select().single(),
    
    getProfile: (id: string) =>
      supabase.from('users').select(`
        *,
        user_goals (goal)
      `).eq('id', id).single()
  },

  // Workouts
  workouts: {
    getAll: (userId: string) =>
      supabase.from('workouts').select(`
        *,
        workout_exercises (
          *,
          exercises (*)
        )
      `).eq('user_id', userId).order('created_at', { ascending: false }),
    
    create: (workout: any) =>
      supabase.from('workouts').insert(workout).select().single(),
    
    update: (id: string, data: any) =>
      supabase.from('workouts').update(data).eq('id', id).select().single(),
    
    delete: (id: string) =>
      supabase.from('workouts').delete().eq('id', id),
    
    getTemplates: () =>
      supabase.from('workouts').select('*').eq('is_template', true)
  },

  // Exercises
  exercises: {
    getAll: () =>
      supabase.from('exercises').select('*').eq('is_active', true),
    
    getByCategory: (category: string) =>
      supabase.from('exercises').select('*').eq('category', category).eq('is_active', true),
    
    create: (exercise: any) =>
      supabase.from('exercises').insert(exercise).select().single()
  },

  // Nutrition
  foods: {
    search: (query: string) =>
      supabase.from('foods').select('*')
        .or(`name.ilike.%${query}%,brand.ilike.%${query}%`)
        .limit(20),
    
    create: (food: any) =>
      supabase.from('foods').insert(food).select().single()
  },

  foodLogs: {
    getByDate: (userId: string, date: string) =>
      supabase.from('food_logs').select(`
        *,
        foods (*)
      `).eq('user_id', userId).eq('logged_date', date),
    
    create: (log: any) =>
      supabase.from('food_logs').insert(log).select().single(),
    
    delete: (id: string) =>
      supabase.from('food_logs').delete().eq('id', id)
  },

  // Progress
  progressLogs: {
    getAll: (userId: string) =>
      supabase.from('progress_logs').select('*')
        .eq('user_id', userId).order('log_date', { ascending: false }),
    
    create: (log: any) =>
      supabase.from('progress_logs').insert(log).select().single(),
    
    update: (id: string, data: any) =>
      supabase.from('progress_logs').update(data).eq('id', id).select().single()
  },

  // Achievements
  achievements: {
    getAll: () =>
      supabase.from('achievements').select('*').eq('is_active', true),
    
    getUserAchievements: (userId: string) =>
      supabase.from('user_achievements').select(`
        *,
        achievements (*)
      `).eq('user_id', userId)
  },

  // Stats
  getUserStats: (userId: string) =>
    supabase.from('user_stats').select('*').eq('id', userId).single()
}

// Storage helpers
export const storage = {
  avatars: {
    upload: (userId: string, file: File) =>
      supabase.storage.from('avatars').upload(`${userId}/avatar.${file.name.split('.').pop()}`, file),
    
    getUrl: (path: string) =>
      supabase.storage.from('avatars').getPublicUrl(path)
  },
  
  progressPhotos: {
    upload: (userId: string, file: File, filename: string) =>
      supabase.storage.from('progress-photos').upload(`${userId}/${filename}`, file),
    
    getUrl: (path: string) =>
      supabase.storage.from('progress-photos').getPublicUrl(path),
    
    delete: (path: string) =>
      supabase.storage.from('progress-photos').remove([path])
  }
}