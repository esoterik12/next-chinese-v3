'use client'
import { ReviewContextProvider } from '@/lib/context/ReviewSessionContext'
import NextAuthProvider from '@/components/layout/NextAuthProvider'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <NextAuthProvider>
        <ReviewContextProvider>{children}</ReviewContextProvider>
      </NextAuthProvider>
    </ThemeProvider>
  )
}

export default Providers