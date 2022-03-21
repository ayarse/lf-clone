import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'LottieFiles' }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
