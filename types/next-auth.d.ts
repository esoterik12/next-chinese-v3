import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string | mongoose.Types.ObjectId
      name?: string
      email?: string
      image?: string
      latestWord: number
    }
  }

  interface User {
    id: string | mongoose.Types.ObjectId
    latestWord: number
  }
}
