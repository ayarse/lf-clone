import { ReactNode } from 'react'
import FluidLayout from './fluidLayout'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <FluidLayout>
      <div className="container mx-auto">{children}</div>
    </FluidLayout>
  )
}

export default Layout
