import PageContainer from '@/components/containers/PageContainer'
import Loading from '@/components/shared/Loading'

export default function LoadingLearnPage() {
  return (
    <PageContainer customClasses='p-0 md:p-4 lg:p-12'>
      <section className='flex h-full w-full flex-grow flex-col items-center justify-center'>
        <p>Loading...</p>
        <Loading />
      </section>
    </PageContainer>
  )
}
