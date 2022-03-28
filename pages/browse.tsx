import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client/core'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import AnimationList from '../components/AnimationList'
import { Loader } from '../components/shared'

const AllAnimationsQuery = gql`
  query Query($sortBy: String, $sortOrder: String) {
    lotties(sortBy: $sortBy, sortOrder: $sortOrder) {
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

const Browse: NextPage = () => {
  const router = useRouter()
  const { data, error, loading } = useQuery(AllAnimationsQuery, {
    variables: {
      sortBy: 'createdAt',
      sortOrder: router.query.order ?? 'desc',
    },
    fetchPolicy: 'network-only',
  })

  if (loading) return <Loader />

  return (
    <AnimationList
      mode="browse"
      lotties={data?.lotties}
      loading={loading}
      error={error}
      title={`Browse Animations`}
    />
  )
}

export default Browse
