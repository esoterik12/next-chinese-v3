import DefaultButton from '@/components/buttons/DefaultButton'
import PageContainer from '@/components/containers/PageContainer'

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
          <div className='h-6 w-6 rounded-lg border border-gray-100 bg-blue-400'></div>
          <div className='h-6 w-6 rounded-lg border border-gray-100 bg-rose-600'></div>
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
          <DefaultButton customClasses='border border-blue-400 hover:bg-gray-800 w-32'>
            <p className='font-semibold'>Primary</p>
          </DefaultButton>
          <DefaultButton customClasses='border border-rose-600 hover:bg-gray-800 w-32'>
            <p className='font-semibold'>Secondary</p>
          </DefaultButton>
          <DefaultButton customClasses='border border-gray-400 hover:bg-gray-800 w-32'>
            <p className='font-semibold'>Tertiary</p>
          </DefaultButton>
        </section>

        {/* Spacing */}
        <section className='flex flex-col gap-4 py-4'>
          <p className='custom-large-text mb-5'>Spacing</p>
          {spacingValues.map(item => (
            <div key={item} className='flex flex-row items-center gap-2'>
              <p className='custom-small-text w-4'>{item}</p>
              <div className={`h-3 w-${item} rounded-sm bg-gray-400`}></div>
            </div>
          ))}
        </section>
      </div>
    </PageContainer>
  )
}
