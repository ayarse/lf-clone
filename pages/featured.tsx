import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'

import AnimationList from '../components/AnimationList'

const FeaturedLottiesQuery = gql`
  query Tags {
    tags(name: "featured") {
      name
      id
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
  }
`

const FeaturedAnimations: NextPage = () => {
  // const [d, setD] = useState()

  const { data, error, loading } = useQuery(FeaturedLottiesQuery)

  return (
    <AnimationList
      lotties={data?.tags?.lotties}
      error={error}
      loading={loading}
      mode="browse"
      title="Featured Animations"
    />
  )
}

export default FeaturedAnimations
