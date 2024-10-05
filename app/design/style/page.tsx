import DefaultButton from '@/components/buttons/DefaultButton'
import PageContainer from '@/components/containers/PageContainer'
import ResultButton from '@/components/cards/ResultButton'

const spacingValues = [1, 2, 3, 4, 6, 8, 12, 24, 40, 60]

export default function StyleDesignPage() {
  return (
    <PageContainer>
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
        <section className='flex flex-col gap-10 py-4'>
          <p className='custom-large-text'>Colors</p>
          <div className='flex flex-row gap-x-2'>
            <p>500</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-sky-500'></div>
            <p>400</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-sky-400'></div>
            <p>300</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-sky-300'></div>
          </div>
          <div className='flex flex-row gap-x-2'>
            <p>600</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-rose-600'></div>
            <p>400</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-rose-400'></div>
          </div>
          <div className='flex flex-row gap-x-2'>
            <p>900</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-gray-900'></div>
            <p>400</p>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-gray-400'></div>
            <p>100</p>
            <div className='h-6 w-6 rounded-lg bg-gray-100'></div>{' '}
          </div>
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
              handleClick={() => {}}
              text='1'
              textColor='text-rose-600'
            />
            <ResultButton
              handleClick={() => {}}
              text='2'
              textColor='text-rose-400'
            />
            <ResultButton
              handleClick={() => {}}
              text='3'
              textColor='text-sky-300'
            />
            <ResultButton
              handleClick={() => {}}
              text='4'
              textColor='text-sky-400'
            />
            <ResultButton
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
