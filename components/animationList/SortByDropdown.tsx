import Link from 'next/link'
import LfDropdown from './LfDropdown'

const SortByDropdown = () => {
  return (
    <LfDropdown title="Sort By">
      <Link href="/popular">
        <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
          Popular
        </a>
      </Link>
      <Link href="/browse?order=asc">
        <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
          Oldest
        </a>
      </Link>
      <Link href="/browse?order=desc">
        <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
          Newest
        </a>
      </Link>
    </LfDropdown>
  )
}

export default SortByDropdown
