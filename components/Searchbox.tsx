import { useRouter } from 'next/router'
import { useState } from 'react'

const preventDefault = (f) => (e) => {
  e.preventDefault()
  f(e)
}

const SearchBox = () => {
  const router = useRouter()
  const [query, setQuery] = useState(router.query.q ?? '')

  const handleParam = (setValue) => (e) => setValue(e.target.value)

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: '/search',
      query: { q: query },
    })
  })

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        value={query}
        onChange={handleParam(setQuery)}
        placeholder="Search for animations"
        className="bg-search-icon w-4/6 rounded-lg border border-gray-200 p-2 pl-8 text-sm shadow-md shadow-gray-100 transition-all duration-200 hover:border-lf-teal hover:bg-lf-teal hover:text-white hover:placeholder:text-teal-100 focus:outline-none"
      />
    </form>
  )
}

export default SearchBox
