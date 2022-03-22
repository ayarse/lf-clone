import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type LayoutProps = {
  children: ReactNode
}

const FluidLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default FluidLayout
