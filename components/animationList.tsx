import Head from 'next/head'
import FluidLayout from './shared/FluidLayout'
import LfDropdown from './animationList/LfDropdown'
import LottiePreviewCard from './animationList/LottiePreviewCard'
import SortByDropdown from './animationList/SortByDropdown'
import Subnav from './animationList/Subnav'
import { Lottie } from './util/LottieTypes'

const lotties: Lottie[] = [
  {
    id: 1,
    author: {
      name: 'Anant Mishra',
      avatar: 'https://assets2.lottiefiles.com/avatars/300_61bc7ad399637.jpg',
    },
    assetUrl: 'https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json',
    downloads: '0',
    likes: '0',
    title: 'Sample title',
    description: 'Sample description',
    createdAt: '',
  },
  {
    id: 2,
    author: {
      name: 'Alysson Franklin',
    },
    assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_xim69oha.json',
    downloads: '34',
    likes: '6',
    title: 'Test Raffle',
    description: 'test',
    createdAt: '',
  },
  {
    id: 3,
    author: {
      name: 'Diego Zito',
      avatar: 'https://assets5.lottiefiles.com/avatars/300_611b9711cbf0c.jpg',
    },
    assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_dsopa1mi.json',
    downloads: '0',
    likes: '0',
    title: 'Test',
    description: 'Test',
    createdAt: '',
  },
  {
    id: 4,
    author: {
      name: 'mayank Nader',
      avatar: 'https://assets5.lottiefiles.com/avatars/300_620d0f4b7bc24.jpg',
    },
    assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_l11so9rv.json',
    downloads: '0',
    likes: '1',
    title: 'Testing',
    description: 'Test',
    createdAt: '',
  },
  {
    id: 5,
    author: {
      name: 'Sarf Pearl',
    },
    assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_w6v4gptz.json',
    downloads: '42',
    likes: '3',
    title: 'Test Load',
    description: 'Test',
    createdAt: '',
  },
]

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
          {lotties.map((lottie) => (
            <LottiePreviewCard key={lottie.id} lottie={lottie} />
          ))}
        </div>
      </section>
    </FluidLayout>
  )
}

export default AnimationList
