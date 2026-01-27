// Import required dependencies
import express from "express"; // Web framework for Node.js
import dotenv from "dotenv"; // Load environment variables from .env file
import mongoose from "mongoose"; // MongoDB object modeling library
import cors from "cors"; // Enable Cross-Origin Resource Sharing
import cookieParser from "cookie-parser"; // Parse cookies from HTTP requests
import bcrypt from "bcryptjs"; // Hash and compare passwords securely
import jwt from "jsonwebtoken"; // Create and verify JSON Web Tokens
 
// Load environment variables from .env file
dotenv.config();
 
// Create Express application instance
const app = express();
// Set server port from environment variable or default to 4000
const PORT = process.env.PORT || 4000;
// Define allowed frontend origins for CORS
const FRONTEND_ORIGINS = [
  process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  "http://localhost:5174", // Additional port for development
];
// JWT secret key for signing tokens
const JWT_SECRET = process.env.JWT_SECRET || "replace_me";
 
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

// SERVER STARTUP AND DATABASE CONNECTION

// Connect to MongoDB database and start the server
mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("✅ MongoDB ansluten"); // MongoDB connected
  
  // Start the Express server on all network interfaces (0.0.0.0)
  app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Server på http://localhost:${PORT}`));
});
 