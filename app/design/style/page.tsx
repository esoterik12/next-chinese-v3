import DefaultButton from '@/components/buttons/DefaultButton'
import PageContainer from '@/components/containers/PageContainer'
import ResultButton from '@/components/cards/ResultButton'

const spacingValues = [1, 2, 3, 4, 6, 8, 12, 24, 40, 60]

export default function StyleDesignPage() {
  return (
    <PageContainer>
      {/* Attention: gap affects Gspacing */}
      <div className='flex flex-row gap-40'>
        {/* Text Section */}
        <section className='flex flex-col gap-7 py-4'>
          <p className='custom-large-text mb-4'>Type Scale</p>
          {/* Headers */}
          <div className='flex flex-row gap-x-4'>
            <h1 className='custom-header-large custom-white-text'>H1</h1>
          </div>
          <div className='flex flex-row gap-x-4'>
            <h2 className='custom-header custom-white-text'>H2 </h2>
            <h2 className='custom-header custom-gray-text'>H2</h2>
          </div>
          <div className='flex flex-row gap-x-4'>
            <h3 className='custom-subheader custom-white-text'>H3</h3>
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
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-blue-500'></div>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-blue-400'></div>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-blue-300'></div>
          </div>
          <div className='flex flex-row gap-x-2'>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-rose-600'></div>
            <div className='h-6 w-6 rounded-lg border border-gray-100 bg-rose-400'></div>
          </div>
          <div className='h-6 w-6 rounded-lg border border-gray-100 bg-gray-900'></div>
          <div className='h-6 w-6 rounded-lg border border-gray-100 bg-gray-400'></div>
          <div className='h-6 w-6 rounded-lg bg-gray-100'></div>
        </section>

        {/* Links */}
        <section className='flex flex-col gap-6 py-4'>
          <p className='custom-large-text mb-3'>Links</p>
          <p className='custom-link-text text-blue-400 hover:cursor-pointer hover:underline'>
            Primary
          </p>
          <p className='custom-link-text text-rose-600 hover:cursor-pointer hover:underline'>
            Secondary
          </p>
          <p className='custom-link-text custom-white-text hover:cursor-pointer hover:underline'>
            Tertiary
          </p>
        </section>

        {/* Buttons */}
        <section className='flex flex-col gap-8 py-4'>
          <p className='custom-large-text mb-2'>Buttons</p>
          <DefaultButton customClasses='w-32'>
            <p>Basic</p>
          </DefaultButton>
          <DefaultButton customClasses='w-32 border border-blue-400'>
            <p>Highlight</p>
          </DefaultButton>
          <DefaultButton customClasses='w-32 border border-rose-600'>
            <p>Attention</p>
          </DefaultButton>
          <div className='mb-3 flex w-full flex-row items-center justify-between gap-x-0.5'>
            <ResultButton text='1' textColor='text-rose-600' />
            <ResultButton text='2' textColor='text-rose-400' />
            <ResultButton text='3' textColor='text-blue-300' />
            <ResultButton text='4' textColor='text-blue-400' />
            <ResultButton text='5' textColor='text-blue-500' />
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
