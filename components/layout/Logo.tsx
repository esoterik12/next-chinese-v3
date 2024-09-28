import Link from 'next/link'
import Image from 'next/image'
import IconOctahedron from '../icons/IconOctahedron'

const Logo = async () => {
  return (
    <div className='my-2 ml-2'>
      <Link
        href='/'
        className='flex flex-row items-center gap-1 text-xl font-bold tracking-wide'
      >
        <div className='flex flex-row items-center w-60'>
          <IconOctahedron classes='w-5 w-5' />
          <p className='ml-2'>Next Chinese</p>
        </div>
      </Link>
    </div>
  )
}

export default Logo
