import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  // Strict mode prevents unknown field queries
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) {
    throw new Error('Missing MongoDB URL')
  }

  if (isConnected) {
    console.log('MongoDB already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    })
    isConnected = true
    console.log('MongoDB connected!')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error connecting to MongoDB: ', error.message)
      throw error.message
    } else {
      console.error('Unknown error connecting to MongoDB: ', error)
      throw new Error('Unknown error occurred while connecting to MongoDB.')
    }
  }
}
