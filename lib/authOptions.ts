import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from './mongoose'
import User from '@/models/user.model'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      await connectToDB()

      try {
        const existingUser = await User.findOne({ email: user.email })

        if (!existingUser) {
          const newUser = new User({
            email: user.email,
            name: user.name,
            image: user.image,
            provider: account.provider
          })
          await newUser.save()
        }
        return true // Proceed with the sign-in
      } catch (error) {
        console.error('Error during sign-in:', error)
        return false // Return false to deny access
      }
    },

    async jwt({ token, user }) {
      // Pass MongoDB user ID to the token if it's a new session
      if (user) {
        const existingUser = await User.findOne({ email: user.email })
        if (existingUser) {
          token.id = existingUser._id
          token.latestWord = existingUser.latestWord
        }
      }
      return token
    },

    async session({ session, token }) {
      // Add the MongoDB user ID to the session object
      if (token) {
        session.user.id = token.id
        session.user.latestWord = token.latestWord as number // Add latestWord to the session
      }
      return session
    }
  }
}
