import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import AnimationList from '../components/AnimationList'

const AnimationSearchQuery = gql`
  query Query($query: String!) {
    search(query: $query) {
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

const Search: NextPage = () => {
  const router = useRouter()
  const { data, error, loading } = useQuery(AnimationSearchQuery, {
    variables: {
      query: router.query.q,
    },
    fetchPolicy: 'network-only',
  })

  return (
    <AnimationList
      mode="search"
      lotties={data?.search}
      error={error}
      loading={loading}
      title={`Search Results for "${router.query.q}"`}
    />
  )
}

export default Search
