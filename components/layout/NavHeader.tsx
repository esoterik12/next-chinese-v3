import Logo from './Logo'
import NavLink from './NavLink'
import GoogleSignIn from '../buttons/GoogleSignIn'
import { getServerSession } from 'next-auth'
import SignOut from '../buttons/SignOut'

export default async function NavHeader() {
  const session = await getServerSession()

  return (
    <header className='z-20 h-14 bg-gray-900'>
      <nav className='flex flex-row items-center justify-between'>
        {/* Logo - Left Side */}
        <div className='flex w-1/4 flex-row'>
          <Logo />
        </div>

        {/* NavLinks */}
        <div className='mr-4 flex flex-row justify-center gap-x-2'>
          <NavLink href='/grammar'>
            <p className='custom-hover-effect w-[60px] rounded-lg border-2 border-gray-500 p-1 text-center md:w-[90px]'>
              {' '}
              Grammar
            </p>
          </NavLink>
          <NavLink href='/learn'>
            <p className='custom-hover-effect w-[60px] rounded-lg border-2 border-gray-500 p-1 text-center md:w-[90px]'>
              Learn
            </p>
          </NavLink>
          {session && <SignOut />}
          {!session && <GoogleSignIn />}
        </div>
      </nav>
    </header>
  )
}
