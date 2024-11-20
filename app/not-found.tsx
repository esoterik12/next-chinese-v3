import Link from 'next/link'
import DefaultButton from '@/components/buttons/DefaultButton'

export default function NotFound() {
  return (
    <main className='mt-24 flex flex-col justify-center text-center align-middle'>
      <h2 className='text-xl'>Error 404:  </h2>
      <p>We cannot find the page you are looking for.</p>
      <Link
        href='/'
        className='text-primary-500 hover:text-primary-200 transition-colors duration-150'
      >
        <DefaultButton customClasses='custom-hover-effect bg-gray-900 p-2 w-[160px] m-4'>
          <p>Homepage</p>
        </DefaultButton>
      </Link>
    </main>
  )
}
