// Import required dependencies
import express from "express"; // Web framework for Node.js
import dotenv from "dotenv"; // Load environment variables from .env file
import mongoose from "mongoose"; // MongoDB object modeling library
import cors from "cors"; // Enable Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Parse cookies from HTTP requests

// Import routes
import authRoutes from "./routes/auth.js";
import workoutRoutes from "./routes/workouts.js";
import nutritionRoutes from "./routes/nutrition.js";

 
// Load environment variables from .env file (in parent directory)
dotenv.config({ path: '../.env' });
 
// Create Express application instance
const app = express();
// Set server port from environment variable or default to 4000
const PORT = process.env.PORT || 4000;
// Define allowed frontend origins for CORS
const FRONTEND_ORIGINS = [
  process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  "http://localhost:5174", // Additional port for development
];

 
// Configure middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies from requests
// Configure CORS to allow requests from specific origins
app.use(cors({ 
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    // Check if request origin is in allowed list
    if (FRONTEND_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    
    // Reject requests from unauthorized origins
    return callback(new Error('Not allowed by CORS'));
  }, 
  credentials: true // Allow cookies to be sent with requests
}));

// ROUTES

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "🏋️ AdaptFit Workout App API", 
    status: "running",
    timestamp: new Date().toISOString() 
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/nutrition", nutritionRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error:", err);
  res.status(500).json({ 
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// SERVER STARTUP AND DATABASE CONNECTION

// Connect to MongoDB database and start the server
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected successfully");
    
    // Start the Express server on all network interfaces (0.0.0.0)
    const server = app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📚 API endpoints available at http://localhost:${PORT}/api`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully');
      server.close(() => {
        mongoose.connection.close();
        console.log('Process terminated');
      });
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    console.error("Please check your MONGO_URI in .env file");
    process.exit(1);
  });

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});
 