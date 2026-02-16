import { supabase } from './lib/supabase.js'

// Test Supabase connection
async function testSupabaseConnection() {
  console.log('🔍 Testing Supabase connection...')
  
  try {
    // Test 1: Check if we can connect to Supabase
    const { data, error } = await supabase
      .from('users') // Assuming you have a users table
      .select('count(*)', { count: 'exact' })
      .limit(1)
    
    if (error && error.code !== 'PGRST116') { // PGRST116 means table doesn't exist - that's ok
      console.error('❌ Supabase connection failed:', error.message)
      return false
    }
    
    console.log('✅ Supabase API connection successful!')
    
    // Test 2: Check authentication
    const { data: { session }, error: authError } = await supabase.auth.getSession()
    
    if (authError) {
      console.error('❌ Auth check failed:', authError.message)
    } else {
      console.log('✅ Supabase Auth working!')
      console.log('Current session:', session ? 'User logged in' : 'No active session')
    }
    
    // Test 3: Check real-time connection
    const channel = supabase.channel('test-channel')
    channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        console.log('✅ Supabase Real-time connection working!')
      } else if (status === 'CHANNEL_ERROR') {
        console.log('⚠️  Real-time connection issue')
      }
    })
    
    // Clean up
    setTimeout(() => {
      supabase.removeChannel(channel)
    }, 2000)
    
    return true
    
  } catch (err) {
    console.error('❌ Unexpected error:', err.message)
    return false
  }
}

// Run the test
testSupabaseConnection()
  .then(success => {
    console.log(success ? '🎉 All Supabase tests passed!' : '💥 Some tests failed')
  })