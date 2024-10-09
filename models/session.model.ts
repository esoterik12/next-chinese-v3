import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date, default: null },
  // TODO: change expiry time
  expireAt: { type: Date, expires: 600, default: Date.now } // TTL Index, auto-delete after 7 days (currenlty 10 minutes for testing)
})

const Session =
  mongoose.models.Session || mongoose.model('Session', sessionSchema)

export default Session
