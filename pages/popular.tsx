import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'

import AnimationList from '../components/AnimationList'

const PopularLottiesQuery = gql`
  query Query {
    lotties(sortBy: "downloads") {
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

const PopularAnimations: NextPage = () => {
  const { data, error, loading } = useQuery(PopularLottiesQuery)

  return (
    <AnimationList
      mode="browse"
      lotties={data?.lotties}
      error={error}
      loading={loading}
      title="Popular Animations"
    />
  )
}

export default PopularAnimations
