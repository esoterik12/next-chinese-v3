import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import NavHeader from '@/components/layout/NavHeader'
import Providers from '@/components/shared/Providers'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: 'Next Chinese',
  description: 'Simplified & Traditional Mandarin Chinese Learning Application',
  metadataBase: new URL('https://nextchinese.vercel.app/'),
  openGraph: {
    siteName: 'Next Chinese | Your Path to Fluency',
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
        className={`${inter.className} min-h-screen w-full bg-[radial-gradient(circle,_#020617,_#01030d)] text-gray-100 antialiased`}
      >
        <Providers>
          <NavHeader />
          {children}
        </Providers>
      </body>
    </html>
  )
}
