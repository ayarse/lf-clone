import Head from 'next/head'
import FluidLayout from './shared/fluidLayout'
import LfDropdown from './animationList/lf-dropdown'
import LottiePreviewCard from './animationList/lottiePreviewCard'
import SortByDropdown from './animationList/sortByDropdown'
import Subnav from './animationList/subnav'

const AnimationList = ({ title }: { title: string }) => {
  return (
    <FluidLayout>
      <Head>
        <title>
          Free Lottie Animation Files, Tools & Plugins - LottieFiles
        </title>
      </Head>
      <Subnav />
      <section className=" bg-white py-6">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <h1 className="averta-bold text-2xl">{title}</h1>
            <SortByDropdown />
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="py-6">
              <a className="averta-semibold mr-5 inline-block rounded-md bg-gray-100 px-2 py-1 text-xs">
                Animations
              </a>
              <a className="text-grey-dark text-xs">People</a>
            </div>
            <div className="flex">
              <span>
                <LfDropdown title="Style" />
              </span>
              <span className="ml-2 inline-block">
                <LfDropdown title="Color" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto grid grid-cols-4 gap-6">
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
            authorAvatar="https://assets2.lottiefiles.com/avatars/300_61bc7ad399637.jpg"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
          <LottiePreviewCard
            lottie="https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json"
            authorName="Anant Mishra"
          />
        </div>
      </section>
    </FluidLayout>
  )
}

export default AnimationList
