import type { NextPage } from 'next'
import Head from 'next/head'
import FluidLayout from '../components/fluidLayout'

const Home: NextPage = () => {
  return (
    <FluidLayout>
      <Head>
        <title>
          Free Lottie Animation Files, Tools & Plugins - LottieFiles
        </title>
      </Head>
      <div className="w-full bg-white py-3 shadow-md">
        <nav className="averta-regula text-center text-sm text-lf-grey-dark">
          <a className="mx-3 inline-block" href="#">
            Featured
          </a>
          <a className="mx-3 inline-block" href="#">
            Popular
          </a>
          <a className="mx-3 inline-block" href="#">
            Animators
          </a>
          <a className="mx-3 inline-block" href="#">
            Marketplace
          </a>
          <a className="mx-3 inline-block" href="#">
            Categories
          </a>
        </nav>
      </div>
      <section className="container mx-auto">Container</section>
    </FluidLayout>
  )
}

export default Home
