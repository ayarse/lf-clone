import Head from 'next/head'
import FluidLayout from './shared/FluidLayout'
import LfDropdown from './animationList/LfDropdown'
import LottiePreviewCard from './animationList/LottiePreviewCard'
import SortByDropdown from './animationList/SortByDropdown'
import Subnav from './animationList/Subnav'
import { Lottie } from './util/LottieTypes'
import { gql, useQuery } from '@apollo/client'

const AllAnimationsQuery = gql`
  query Query {
    lotties {
      id
      title
      description
      assetUrl
      downloads
      likes
      user {
        name
        avatar
      }
    }
  }
`

const AnimationList = ({ title }: { title: string }) => {
  const { data, error, loading } = useQuery(AllAnimationsQuery)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Oops, something went wrong - {error.message}</p>

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
          {data.lotties.map((lottie) => (
            <LottiePreviewCard key={lottie.id} lottie={lottie} />
          ))}
        </div>
      </section>
    </FluidLayout>
  )
}

export default AnimationList
