import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  username: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
    trim: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  dateJoined: {
    type: Date,
    default: Date.now
  },
  profile: {
    firstName: {
      type: String,
      trim: true,
      maxlength: 50
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 50
    },
    age: {
      type: Number,
      min: 13,
      max: 120
    },
    height: Number, // in cm
    weight: Number, // in kg
    fitnessLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      default: 'beginner'
    },
    goals: [{
      type: String,
      enum: ['weight_loss', 'muscle_gain', 'endurance', 'strength', 'general_fitness']
    }]
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout'
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;