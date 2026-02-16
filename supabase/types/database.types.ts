export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          badge_color: string | null
          badge_icon: string | null
          category: Database["public"]["Enums"]["achievement_category"] | null
          created_at: string
          criteria: Json | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          points: number | null
        }
        Insert: {
          badge_color?: string | null
          badge_icon?: string | null
          category?: Database["public"]["Enums"]["achievement_category"] | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          points?: number | null
        }
        Update: {
          badge_color?: string | null
          badge_icon?: string | null
          category?: Database["public"]["Enums"]["achievement_category"] | null
          created_at?: string
          criteria?: Json | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          points?: number | null
        }
        Relationships: []
      }
      exercises: {
        Row: {
          calories_per_minute: number | null
          category: Database["public"]["Enums"]["exercise_category"] | null
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"] | null
          equipment: string[] | null
          id: string
          image_url: string | null
          instructions: string[] | null
          is_active: boolean | null
          muscle_groups: string[] | null
          name: string
          tips: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          calories_per_minute?: number | null
          category?: Database["public"]["Enums"]["exercise_category"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          equipment?: string[] | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          is_active?: boolean | null
          muscle_groups?: string[] | null
          name: string
          tips?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          calories_per_minute?: number | null
          category?: Database["public"]["Enums"]["exercise_category"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          equipment?: string[] | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          is_active?: boolean | null
          muscle_groups?: string[] | null
          name?: string
          tips?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercises_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      food_logs: {
        Row: {
          created_at: string
          food_id: string
          id: string
          logged_at: string
          logged_date: string
          meal_type: Database["public"]["Enums"]["meal_type"] | null
          notes: string | null
          quantity: number
          user_id: string
        }
        Insert: {
          created_at?: string
          food_id: string
          id?: string
          logged_at?: string
          logged_date: string
          meal_type?: Database["public"]["Enums"]["meal_type"] | null
          notes?: string | null
          quantity: number
          user_id: string
        }
        Update: {
          created_at?: string
          food_id?: string
          id?: string
          logged_at?: string
          logged_date?: string
          meal_type?: Database["public"]["Enums"]["meal_type"] | null
          notes?: string | null
          quantity?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "food_logs_food_id_fkey"
            columns: ["food_id"]
            isOneToOne: false
            referencedRelation: "foods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "food_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      foods: {
        Row: {
          barcode: string | null
          brand: string | null
          calories_per_serving: number | null
          carbs_per_serving: number | null
          category: string | null
          created_at: string
          created_by: string | null
          fat_per_serving: number | null
          fiber_per_serving: number | null
          id: string
          is_verified: boolean | null
          name: string
          protein_per_serving: number | null
          serving_size: number | null
          serving_unit: string | null
          sodium_per_serving: number | null
          sugar_per_serving: number | null
          updated_at: string
        }
        Insert: {
          barcode?: string | null
          brand?: string | null
          calories_per_serving?: number | null
          carbs_per_serving?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          fat_per_serving?: number | null
          fiber_per_serving?: number | null
          id?: string
          is_verified?: boolean | null
          name: string
          protein_per_serving?: number | null
          serving_size?: number | null
          serving_unit?: string | null
          sodium_per_serving?: number | null
          sugar_per_serving?: number | null
          updated_at?: string
        }
        Update: {
          barcode?: string | null
          brand?: string | null
          calories_per_serving?: number | null
          carbs_per_serving?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          fat_per_serving?: number | null
          fiber_per_serving?: number | null
          id?: string
          is_verified?: boolean | null
          name?: string
          protein_per_serving?: number | null
          serving_size?: number | null
          serving_unit?: string | null
          sodium_per_serving?: number | null
          sugar_per_serving?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "foods_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      meal_plan_foods: {
        Row: {
          created_at: string
          day_number: number
          food_id: string
          id: string
          meal_plan_id: string
          meal_type: Database["public"]["Enums"]["meal_type"] | null
          order_index: number | null
          quantity: number
        }
        Insert: {
          created_at?: string
          day_number: number
          food_id: string
          id?: string
          meal_plan_id: string
          meal_type?: Database["public"]["Enums"]["meal_type"] | null
          order_index?: number | null
          quantity: number
        }
        Update: {
          created_at?: string
          day_number?: number
          food_id?: string
          id?: string
          meal_plan_id?: string
          meal_type?: Database["public"]["Enums"]["meal_type"] | null
          order_index?: number | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "meal_plan_foods_food_id_fkey"
            columns: ["food_id"]
            isOneToOne: false
            referencedRelation: "foods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meal_plan_foods_meal_plan_id_fkey"
            columns: ["meal_plan_id"]
            isOneToOne: false
            referencedRelation: "meal_plans"
            referencedColumns: ["id"]
          }
        ]
      }
      meal_plans: {
        Row: {
          created_at: string
          description: string | null
          duration_days: number | null
          id: string
          is_active: boolean | null
          name: string
          target_calories: number | null
          target_carbs: number | null
          target_fat: number | null
          target_protein: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_days?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          target_calories?: number | null
          target_carbs?: number | null
          target_fat?: number | null
          target_protein?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_days?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          target_calories?: number | null
          target_carbs?: number | null
          target_fat?: number | null
          target_protein?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meal_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      progress_logs: {
        Row: {
          body_fat_percentage: number | null
          created_at: string
          energy_level: number | null
          id: string
          log_date: string
          measurements: Json | null
          mood_rating: number | null
          muscle_mass: number | null
          notes: string | null
          progress_photos: string[] | null
          sleep_hours: number | null
          updated_at: string
          user_id: string
          water_intake_liters: number | null
          weight: number | null
        }
        Insert: {
          body_fat_percentage?: number | null
          created_at?: string
          energy_level?: number | null
          id?: string
          log_date: string
          measurements?: Json | null
          mood_rating?: number | null
          muscle_mass?: number | null
          notes?: string | null
          progress_photos?: string[] | null
          sleep_hours?: number | null
          updated_at?: string
          user_id: string
          water_intake_liters?: number | null
          weight?: number | null
        }
        Update: {
          body_fat_percentage?: number | null
          created_at?: string
          energy_level?: number | null
          id?: string
          log_date?: string
          measurements?: Json | null
          mood_rating?: number | null
          muscle_mass?: number | null
          notes?: string | null
          progress_photos?: string[] | null
          sleep_hours?: number | null
          updated_at?: string
          user_id?: string
          water_intake_liters?: number | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "progress_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_achievements: {
        Row: {
          achievement_id: string
          earned_at: string
          id: string
          progress_data: Json | null
          user_id: string
        }
        Insert: {
          achievement_id: string
          earned_at?: string
          id?: string
          progress_data?: Json | null
          user_id: string
        }
        Update: {
          achievement_id?: string
          earned_at?: string
          id?: string
          progress_data?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_goals: {
        Row: {
          created_at: string
          goal: Database["public"]["Enums"]["fitness_goal"] | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          goal?: Database["public"]["Enums"]["fitness_goal"] | null
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          goal?: Database["public"]["Enums"]["fitness_goal"] | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          age: number | null
          created_at: string
          date_joined: string
          email: string
          first_name: string | null
          fitness_level: Database["public"]["Enums"]["fitness_level"] | null
          height: number | null
          id: string
          is_active: boolean | null
          last_name: string | null
          name: string
          updated_at: string
          username: string | null
          weight: number | null
        }
        Insert: {
          age?: number | null
          created_at?: string
          date_joined?: string
          email: string
          first_name?: string | null
          fitness_level?: Database["public"]["Enums"]["fitness_level"] | null
          height?: number | null
          id: string
          is_active?: boolean | null
          last_name?: string | null
          name: string
          updated_at?: string
          username?: string | null
          weight?: number | null
        }
        Update: {
          age?: number | null
          created_at?: string
          date_joined?: string
          email?: string
          first_name?: string | null
          fitness_level?: Database["public"]["Enums"]["fitness_level"] | null
          height?: number | null
          id?: string
          is_active?: boolean | null
          last_name?: string | null
          name?: string
          updated_at?: string
          username?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      workout_exercises: {
        Row: {
          created_at: string
          distance: number | null
          duration_seconds: number | null
          exercise_id: string
          id: string
          notes: string | null
          order_index: number
          reps: number | null
          rest_seconds: number | null
          sets: number | null
          weight: number | null
          workout_id: string
        }
        Insert: {
          created_at?: string
          distance?: number | null
          duration_seconds?: number | null
          exercise_id: string
          id?: string
          notes?: string | null
          order_index: number
          reps?: number | null
          rest_seconds?: number | null
          sets?: number | null
          weight?: number | null
          workout_id: string
        }
        Update: {
          created_at?: string
          distance?: number | null
          duration_seconds?: number | null
          exercise_id?: string
          id?: string
          notes?: string | null
          order_index?: number
          reps?: number | null
          rest_seconds?: number | null
          sets?: number | null
          weight?: number | null
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_exercises_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          }
        ]
      }
      workout_plan_days: {
        Row: {
          created_at: string
          day_number: number
          id: string
          is_rest_day: boolean | null
          notes: string | null
          week_number: number
          workout_id: string | null
          workout_plan_id: string
        }
        Insert: {
          created_at?: string
          day_number: number
          id?: string
          is_rest_day?: boolean | null
          notes?: string | null
          week_number: number
          workout_id?: string | null
          workout_plan_id: string
        }
        Update: {
          created_at?: string
          day_number?: number
          id?: string
          is_rest_day?: boolean | null
          notes?: string | null
          week_number?: number
          workout_id?: string | null
          workout_plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_plan_days_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_plan_days_workout_plan_id_fkey"
            columns: ["workout_plan_id"]
            isOneToOne: false
            referencedRelation: "workout_plans"
            referencedColumns: ["id"]
          }
        ]
      }
      workout_plans: {
        Row: {
          category: Database["public"]["Enums"]["workout_category"] | null
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"] | null
          duration_weeks: number | null
          id: string
          is_active: boolean | null
          is_public: boolean | null
          name: string
          target_goals: string[] | null
          updated_at: string
          user_id: string | null
          workouts_per_week: number | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["workout_category"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          duration_weeks?: number | null
          id?: string
          is_active?: boolean | null
          is_public?: boolean | null
          name: string
          target_goals?: string[] | null
          updated_at?: string
          user_id?: string | null
          workouts_per_week?: number | null
        }
        Update: {
          category?: Database["public"]["Enums"]["workout_category"] | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          duration_weeks?: number | null
          id?: string
          is_active?: boolean | null
          is_public?: boolean | null
          name?: string
          target_goals?: string[] | null
          updated_at?: string
          user_id?: string | null
          workouts_per_week?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_plans_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_plans_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      workouts: {
        Row: {
          calories_burned: number | null
          completed_date: string | null
          created_at: string
          description: string | null
          difficulty_level: Database["public"]["Enums"]["difficulty_level"] | null
          duration_minutes: number | null
          id: string
          is_completed: boolean | null
          is_template: boolean | null
          name: string
          notes: string | null
          scheduled_date: string | null
          updated_at: string
          user_id: string | null
          workout_type: Database["public"]["Enums"]["workout_category"] | null
        }
        Insert: {
          calories_burned?: number | null
          completed_date?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          duration_minutes?: number | null
          id?: string
          is_completed?: boolean | null
          is_template?: boolean | null
          name: string
          notes?: string | null
          scheduled_date?: string | null
          updated_at?: string
          user_id?: string | null
          workout_type?: Database["public"]["Enums"]["workout_category"] | null
        }
        Update: {
          calories_burned?: number | null
          completed_date?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: Database["public"]["Enums"]["difficulty_level"] | null
          duration_minutes?: number | null
          id?: string
          is_completed?: boolean | null
          is_template?: boolean | null
          name?: string
          notes?: string | null
          scheduled_date?: string | null
          updated_at?: string
          user_id?: string | null
          workout_type?: Database["public"]["Enums"]["workout_category"] | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      user_stats: {
        Row: {
          achievements_earned: number | null
          date_joined: string | null
          id: string | null
          name: string | null
          progress_entries: number | null
          total_food_logs: number | null
          total_workouts: number | null
          workouts_this_week: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      achievement_category: "workout" | "nutrition" | "progress" | "streak" | "milestone"
      difficulty_level: "beginner" | "intermediate" | "advanced"
      exercise_category: "strength" | "cardio" | "flexibility" | "yoga" | "functional"
      fitness_goal: "weight_loss" | "muscle_gain" | "endurance" | "strength" | "general_fitness"
      fitness_level: "beginner" | "intermediate" | "advanced"
      meal_type: "breakfast" | "lunch" | "dinner" | "snack"
      workout_category: "strength" | "cardio" | "flexibility" | "yoga" | "mixed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}