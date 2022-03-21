import type { NextPage } from 'next'
import Layout from '../components/layout'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import ArrowButton from '../components/arrowButton'
import ComparisonBox from '../components/comparisonBox'
import CompanyLogos from '../components/companyLogos'
import Head from 'next/head'

const companies = [
  'airbnb.svg',
  'cred.svg',
  'grab.svg',
  'swiggy.svg',
  'tonal.svg',
  'bbc.svg',
  'disney.svg',
  'spotify.svg',
  'tiktok.svg',
  'uber.svg',
]

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Free Lottie Animation Files, Tools & Plugins - LottieFiles
        </title>
      </Head>
      <section className="flex w-full items-center py-6">
        <div className="w-1/2">
          <h1 className="averta-bold text-6xl text-lf-black">
            Lightweight, scalable animations for your
            <div>
              <span className="words text-lf-teal">docs</span> and{' '}
              <span className="words text-lf-teal">pitches</span>
            </div>
          </h1>
          <p className="text-grey-dark w-3/4 py-6 text-lg">
            LottieFiles provides all the tools that you need to <br />
            create, edit, test and display Lottie animations.
          </p>
          <ArrowButton title="Go to My Dashboard" url="#"></ArrowButton>
        </div>
        <div className="w-1/2">
          <Player
            autoplay
            loop
            src="/lotties/home_main_anim.json"
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div>
      </section>
      <section className="container mx-auto">
        <h5 className="text-grey-darker averta-regular text-center">
          Used by designers and developers from{' '}
          <span className="averta-bold font-bold">130,000+ companies</span>{' '}
          worldwide
        </h5>
        <CompanyLogos items={companies} />
      </section>
      <section className="flex items-center py-16">
        <div className="flex h-full w-1/2 items-baseline px-40">
          <ComparisonBox active={false} format="GIF" size="375KB">
            <img src="/images/comparison_2.gif" alt="" />
          </ComparisonBox>
          <ComparisonBox active={true} format="Lottie" size="56KB">
            <Player
              autoplay
              loop
              src="/lotties/comparison_1.json"
              style={{ height: '100%', width: '100%' }}
            ></Player>
          </ComparisonBox>
        </div>
        <div className="w-1/2">
          <h2 className="averta-semi  bold text-grey-darkest text-5xl">
            The new industry standard
          </h2>
          <p className="text-grey py-6 text-lg">
            Lottie is an open source animation file format that’s tiny, high
            quality, interactive, and can be manipulated at runtime. The top 500
            apps on the App store now use Lottie to engage users and enhance
            conversions.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
