import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  // Strict mode prevents unknown field queries
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) {
    throw new Error('Missing MongoDB URL')
  }

  if (isConnected) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })
    isConnected = true
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message || error)
    throw new Error('Failed to connect to MongoDB')
  }
}
