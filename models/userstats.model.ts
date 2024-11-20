import mongoose, { Document, Schema } from 'mongoose';

export interface UserStatsDocument extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  viewCount: number;
  duration: number;
}

const userStatsSchema = new Schema<UserStatsDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number, // Value should be converted to seconds
    default: 0
  }
});

userStatsSchema.index({ userId: 1, date: 1 }, { unique: true });

const UserStats =
  mongoose.models.UserStats ||
  mongoose.model<UserStatsDocument>('UserStats', userStatsSchema);

export default UserStats;
