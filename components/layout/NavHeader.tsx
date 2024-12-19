import Logo from './Logo'
import NavLink from './NavLink'
import GoogleSignIn from '../buttons/GoogleSignIn'
import { getServerSession } from 'next-auth'
import SignOut from '../buttons/SignOut'

export default async function NavHeader() {
  const session = await getServerSession()

  return (
    <header className='custom-background z-20 h-14'>
      <nav className='flex flex-row items-center justify-between'>
        {/* Logo - Left Side */}
        <div className='flex w-1/4 flex-row'>
          <Logo />
        </div>

        {/* NavLinks */}
        <div className='mr-4 flex flex-row justify-center gap-x-2'>
          <NavLink href='/grammar'>
            <p className='custom-hover-effect w-[90px] rounded-lg p-1 text-center'>
              Grammar
            </p>
          </NavLink>
          <NavLink href='/learn'>
            <p className='custom-hover-effect w-[70px] rounded-lg p-1 text-center'>
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
