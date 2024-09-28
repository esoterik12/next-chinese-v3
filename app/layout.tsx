import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import NextAuthProvider from '@/components/layout/NextAuthProvider'
import { Inter } from 'next/font/google'
import NavHeader from '@/components/layout/NavHeader'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
  // themeColor: '#ffffff'
}

export const metadata: Metadata = {
  // Unfinished: Update URL and description
  title: 'Next Chinese',
  description: 'Traditional Mandarin Flashcard App',
  metadataBase: new URL('https://nextjs-i18n-enite-test.vercel.app/en'),
  openGraph: {
    siteName: 'Luke Hide | Web Services',
    type: 'website',
    locale: 'en_US'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'Next Chinese',
  appleWebApp: {
    title: 'Next Chinese',
    statusBarStyle: 'default',
    capable: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen w-full bg-[radial-gradient(circle,_#020617,_#01030d)] antialiased text-gray-100`}
      >
        
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <NextAuthProvider>
            <NavHeader />
            {children}
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
