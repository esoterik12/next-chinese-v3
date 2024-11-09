'use client'
import DefaultButton from '@/components/buttons/DefaultButton'
import PageContainer from '@/components/containers/PageContainer'
import ResultButton from '@/components/buttons/ResultButton'

const colors = [
  {
    number: 500,
    background: 'bg-sky-500',
    hex: '#0ea5e9' // Tailwind sky-500
  },
  {
    number: 400,
    background: 'bg-sky-400',
    hex: '#38bdf8' // Tailwind sky-400
  },
  {
    number: 300,
    background: 'bg-sky-300',
    hex: '#7dd3fc' // Tailwind sky-300
  },
  {
    number: 600,
    background: 'bg-rose-600',
    hex: '#e11d48' // Tailwind rose-600
  },
  {
    number: 400,
    background: 'bg-rose-400',
    hex: '#fb7185' // Tailwind rose-400
  },
  {
    number: 900,
    background: 'bg-gray-900',
    hex: '#111827' // Tailwind gray-900
  },
  {
    number: 400,
    background: 'bg-gray-400',
    hex: '#9ca3af' // Tailwind gray-400
  },
  {
    number: 100,
    background: 'bg-gray-100',
    hex: '#f3f4f6' // Tailwind gray-100
  }
]

export default function StyleDesignPage() {
  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12 h-full'>
      {/* Attention: gap affects Gspacing */}
      <div className='flex flex-row gap-20'>
        {/* Text Section */}
        <section className='flex flex-col gap-7 py-4'>
          <p className='custom-large-text mb-4'>Type Scale</p>
          {/* Headers */}
          <div className='flex flex-row gap-x-4'>
            <h1 className='custom-header-large'>H1</h1>
          </div>
          <div className='flex flex-row gap-x-4'>
            <h2 className='custom-header'>H2 </h2>
            <h2 className='custom-header custom-gray-text'>H2</h2>
          </div>
          <div className='flex flex-row gap-x-4'>
            <h3 className='custom-subheader'>H3</h3>
            <h3 className='custom-subheader custom-gray-text'>H3</h3>
          </div>
          {/* Paragraph Text */}
          <p className='custom-large-text'>Large Text</p>
          <p className='custom-text'>Standard Text</p>
          <p className='custom-small-text custom-gray-text'>Small Text</p>
        </section>

        {/* Colors Section */}
        <section className='flex flex-col gap-4 py-4'>
          <p className='custom-large-text'>Colors</p>
          {colors.map(item => (
            <div key={item.hex} className='flex flex-row gap-x-4'>
              <div
                className={`h-6 w-6 rounded-lg border border-gray-100 ${item.background}`}
              ></div>
              <p className='w-8'>{item.number}</p>
              <p className='w-16'>{item.hex}</p>
            </div>
          ))}
        </section>

        {/* Links */}
        <section className='flex flex-col gap-6 py-4'>
          <p className='custom-large-text mb-3'>Links</p>
          <p className='custom-primary-link'>Primary</p>
          <p className='custom-secondary-link'>Secondary</p>
          <p className='custom-link'>Tertiary</p>
        </section>

        {/* Buttons */}
        <section className='flex flex-col gap-8 py-4'>
          <p className='custom-large-text mb-2'>Buttons</p>
          <DefaultButton customClasses='w-32 p-2 border-2 border-gray-950'>
            <p>Basic</p>
          </DefaultButton>
          <DefaultButton customClasses='w-32 border-2 border-sky-500 p-2'>
            <p>Highlight</p>
          </DefaultButton>
          <DefaultButton customClasses='w-32 border-2 border-rose-600 p-2'>
            <p>Attention</p>
          </DefaultButton>
          <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-0.5'>
            <ResultButton
              disabled={false}
              handleClick={() => {}}
              text='1'
              textColor='text-rose-600'
            />
            <ResultButton
              disabled={false}
              handleClick={() => {}}
              text='2'
              textColor='text-rose-400'
            />
            <ResultButton
              disabled={false}
              handleClick={() => {}}
              text='3'
              textColor='text-sky-300'
            />
            <ResultButton
              disabled={false}
              handleClick={() => {}}
              text='4'
              textColor='text-sky-400'
            />
            <ResultButton
              disabled={false}
              handleClick={() => {}}
              text='5'
              textColor='text-sky-500'
            />
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
