# Add Supabase CLI as a dev dependency
npm install -D @supabase/cli

# Install client dependencies
cd client && npm install

# Initialize your Supabase project (do this after setting up a Supabase account)
# supabase init (already done)

# Link to your remote project (replace YOUR_PROJECT_REF)
# supabase link --project-ref YOUR_PROJECT_REF

# Start local Supabase (alternative to remote for development)
# npm run db:start

# Push migrations to your database
# npm run db:migrate

# Seed your database with sample data
# npm run db:seed

# Generate TypeScript types
# npm run db:types