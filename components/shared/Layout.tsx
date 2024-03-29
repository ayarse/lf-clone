import { ReactNode } from 'react'
import FluidLayout from './FluidLayout'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <FluidLayout>
      <div className="container mx-auto">{children}</div>
    </FluidLayout>
  )
}

export default Layout
