# AdaptFit Workout App

A comprehensive workout and nutrition tracking application built with React, Node.js, Express, and MongoDB.

## Project Structure

```
workout-app/
├── client/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── models/                 # Database models
│   └── User.js
├── routes/                 # API routes
│   ├── auth.js            # Authentication routes
│   ├── workouts.js        # Workout management
│   └── nutrition.js       # Nutrition tracking
├── server/                 # Server files (if needed)
├── .env                    # Environment variables
├── index.js               # Express server entry point
└── package.json           # Server dependencies
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Install server dependencies
npm install

# Install client dependencies
npm run client:install

# Or install all at once
npm run install:all
```

### 2. Environment Variables

Make sure your `.env` file contains:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### 3. Running the Application

```bash
# Start the server (development mode with nodemon)
npm run dev

# Start the client (in a separate terminal)
npm run client

# Start the server (production mode)
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Workouts
- `GET /api/workouts` - Get all workouts
- `POST /api/workouts` - Create new workout
- `GET /api/workouts/:id` - Get specific workout
- `PUT /api/workouts/:id` - Update workout
- `DELETE /api/workouts/:id` - Delete workout

### Nutrition
- `GET /api/nutrition` - Get nutrition data
- `POST /api/nutrition/log` - Log food intake
- `GET /api/nutrition/calories` - Get calorie tracking
- `GET /api/nutrition/meal-plans` - Get meal plans

## Features

- **User Authentication** - Register, login, logout with JWT tokens
- **Workout Management** - Create and track workouts
- **Nutrition Tracking** - Log food intake and track calories
- **User Profiles** - Store user preferences and fitness goals
- **Error Handling** - Comprehensive error handling and logging
- **CORS Support** - Cross-origin requests enabled for frontend

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

### Frontend
- React 19
- React Router for navigation
- Vite for build tool
- ESLint for code quality

## Development

The app is set up with proper error handling, logging, and development tools. The server includes:

- Health check endpoint at `/`
- Comprehensive error handling middleware
- Graceful shutdown handling
- Environment-based configuration
- Security best practices for authentication

## Next Steps

1. Implement the workout and nutrition logic in the route handlers
2. Create database models for workouts, exercises, and nutrition data
3. Build out the React frontend components
4. Add middleware for protecting authenticated routes
5. Implement data validation and sanitization
6. Add comprehensive testing
7. Set up production deployment