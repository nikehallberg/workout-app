import { useState, useEffect } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase, auth } from '../lib/supabase'

// Simple connection test function
export const testSupabaseConnection = async () => {
  try {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      console.error('❌ Supabase connection failed:', error.message)
      return { success: false, error }
    }
    console.log('✅ Supabase connection successful!')
    return { success: true, error: null }
  } catch (err) {
    console.error('❌ Supabase connection failed:', err)
    return { success: false, error: err }
  }
}

// Hook to manage authentication state
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      try {
        const { data: { user } } = await auth.getCurrentUser()
        setUser(user)
      } catch (error) {
        console.error('Error getting user:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  return {
    user,
    loading,
    signIn: auth.signIn,
    signUp: auth.signUp,
    signOut: auth.signOut
  }
}

// Hook for user profile data
export const useUserProfile = (userId: string | undefined) => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchProfile = async () => {
      try {
        const { data, error } = await supabase
          .from('users')
          .select(`
            *,
            user_goals (goal)
          `)
          .eq('id', userId)
          .single()

        if (error) throw error
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [userId])

  return { profile, loading }
}

// Hook for workout data
export const useWorkouts = (userId: string | undefined) => {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchWorkouts = async () => {
      try {
        const { data, error } = await supabase
          .from('workouts')
          .select(`
            *,
            workout_exercises (
              *,
              exercises (*)
            )
          `)
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (error) throw error
        setWorkouts(data || [])
      } catch (error) {
        console.error('Error fetching workouts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [userId])

  const createWorkout = async (workoutData: any) => {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert({ ...workoutData, user_id: userId })
        .select()
        .single()

      if (error) throw error
      setWorkouts(prev => [data, ...prev])
      return data
    } catch (error) {
      console.error('Error creating workout:', error)
      throw error
    }
  }

  return { workouts, loading, createWorkout }
}

// Hook for exercises
export const useExercises = () => {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const { data, error } = await supabase
          .from('exercises')
          .select('*')
          .eq('is_active', true)
          .order('name')

        if (error) throw error
        setExercises(data || [])
      } catch (error) {
        console.error('Error fetching exercises:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchExercises()
  }, [])

  return { exercises, loading }
}

// Hook for nutrition/food logging
export const useFoodLogs = (userId: string | undefined, date: string) => {
  const [foodLogs, setFoodLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchFoodLogs = async () => {
      try {
        const { data, error } = await supabase
          .from('food_logs')
          .select(`
            *,
            foods (*)
          `)
          .eq('user_id', userId)
          .eq('logged_date', date)
          .order('logged_at')

        if (error) throw error
        setFoodLogs(data || [])
      } catch (error) {
        console.error('Error fetching food logs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFoodLogs()
  }, [userId, date])

  const logFood = async (foodLog: any) => {
    try {
      const { data, error } = await supabase
        .from('food_logs')
        .insert({ ...foodLog, user_id: userId })
        .select(`
          *,
          foods (*)
        `)
        .single()

      if (error) throw error
      setFoodLogs(prev => [...prev, data])
      return data
    } catch (error) {
      console.error('Error logging food:', error)
      throw error
    }
  }

  return { foodLogs, loading, logFood }
}

// Hook for progress tracking
export const useProgressLogs = (userId: string | undefined) => {
  const [progressLogs, setProgressLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchProgressLogs = async () => {
      try {
        const { data, error } = await supabase
          .from('progress_logs')
          .select('*')
          .eq('user_id', userId)
          .order('log_date', { ascending: false })

        if (error) throw error
        setProgressLogs(data || [])
      } catch (error) {
        console.error('Error fetching progress logs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProgressLogs()
  }, [userId])

  const createProgressLog = async (logData: any) => {
    try {
      const { data, error } = await supabase
        .from('progress_logs')
        .insert({ ...logData, user_id: userId })
        .select()
        .single()

      if (error) throw error
      setProgressLogs(prev => [data, ...prev])
      return data
    } catch (error) {
      console.error('Error creating progress log:', error)
      throw error
    }
  }

  return { progressLogs, loading, createProgressLog }
}

// Generic hook for real-time subscriptions
export const useRealtimeSubscription = (
  table: string,
  event: 'INSERT' | 'UPDATE' | 'DELETE' | '*',
  callback: (payload: any) => void,
  filter?: string
) => {
  useEffect(() => {
    let subscription: any

    const setupSubscription = () => {
      let query = supabase
        .channel(`${table}_changes`)
        .on('postgres_changes', 
          { 
            event, 
            schema: 'public', 
            table,
            ...(filter && { filter })
          }, 
          callback
        )
      
      subscription = query.subscribe()
    }

    setupSubscription()

    return () => {
      if (subscription) {
        supabase.removeChannel(subscription)
      }
    }
  }, [table, event, callback, filter])
}