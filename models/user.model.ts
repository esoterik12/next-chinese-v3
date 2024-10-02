// User model will be contained to login and basic statistics
// It will have a one-to-many relationship with a separate userWords model which contains all the words the user has learned

import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  latestWord: {
    type: Number,
    default: 0 // Zero so function can select gt when looking for next words
  }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
