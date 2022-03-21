import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
