import { UserStatsDocument } from '@/models/userstats.model'
import mongoose from 'mongoose'

// This type document holds types used in request of UserInfo in /learn page
// Using fetchUserInfo()

export interface UserInfoRequest {
  message: string
  code: number
  result: UserInfo
}

export interface UserInfo {
  wordsDueCount: number
  user: User
  userStats: UserStatsRequest
}

export interface User {
  _id: mongoose.Types.ObjectId
  email: string
  name: string
  createdAt: Date
  latestWord: number
  __v: number
  preferredChars: 'traditional' | 'simplified'
}

export interface UserStatsRequest {
  message: string
  code: number
  result: UserStatsDocument[]
}

// This exists to have a simple js object type w/o
export interface BasicUserStatsData {
  date: Date
  viewCount: number
}
