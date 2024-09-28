import Logo from './Logo'
import NavLink from './NavLink'
import GoogleSignIn from '../buttons/GoogleSignIn'

export default async function NavHeader() {
  return (
    <header className='z-20 h-14 bg-gray-900'>
      <nav className='flex flex-row items-center justify-between'>
        {/* Logo - Left Side */}
        <div className='flex w-1/4 flex-row'>
          <Logo />
        </div>

        {/* NavLinks */}
        <div className='mr-4 hidden flex-row justify-center sm:block md:flex'>
          <ul className='sm:text-md flex gap-x-5'>
            <li>
              <NavLink href='/test'>Test</NavLink>
            </li>
            <li>
              <NavLink href='/design/style'>Styles</NavLink>
            </li>
            <li>
              <NavLink href='/design/ui'>Cards</NavLink>
            </li>
            <li>
              <GoogleSignIn />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
