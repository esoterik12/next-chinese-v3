import { ReactElement } from 'react'

interface PageContainerProps {
  children: ReactElement
  customClasses?: string
}

const PageContainer = ({ children, customClasses }: PageContainerProps) => {
  return (
    <main
      className={`${customClasses} p-4 lg:p-12`}
    >
      {children}
    </main>
  )
}

export default PageContainer
