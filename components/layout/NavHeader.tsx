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
        <div className='mr-4 flex flex-row justify-center sm:block'>
          <ul className='sm:text-md flex gap-x-2'>
            {/* <li className='p-1'>
              <NavLink href='/test'>Test</NavLink>
            </li> */}
            {/* 
            <li className='p-1'>
              <NavLink href='/design/style'>Styles</NavLink>
            </li> */}
            <li className='custom-hover-effect w-[60px] md:w-[90px] rounded-lg border-2 border-gray-500 p-1 text-center'>
              <NavLink href='/learn'>Learn</NavLink>
            </li>
            {session && (
              <li>
                <SignOut />
              </li>
            )}
            {!session && (
              <li>
                <GoogleSignIn />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
