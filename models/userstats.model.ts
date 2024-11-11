import mongoose, { Document, Schema } from 'mongoose';

export interface UserStatsDocument extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  viewCount: number;
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
});

// Compound index on `userId` and `date`
userStatsSchema.index({ userId: 1, date: 1 }, { unique: true });

const UserStats =
  mongoose.models.UserStats ||
  mongoose.model<UserStatsDocument>('UserStats', userStatsSchema);

export default UserStats;
