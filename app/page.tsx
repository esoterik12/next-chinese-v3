import GoogleSignIn from '@/components/buttons/GoogleSignIn'
import TestClientSession from '@/components/TestClientSession'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <Link href='/design/style'>Style Design Page</Link>
      <Link href='/design/ui'>UI Design Page</Link>
      <GoogleSignIn />
      <TestClientSession />
    </div>
  )
}
