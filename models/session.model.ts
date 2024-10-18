import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date, default: null },
  expireAt: { type: Date, expires: 604800 } // TTL Index, auto-delete after 7 days
})

const Session =
  mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default Session
