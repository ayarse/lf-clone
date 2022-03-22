import LfDropdown from './LfDropdown'

const SortByDropdown = () => {
  return (
    <LfDropdown title="Sort By">
      <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
        Popular
      </a>
      <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
        Oldest
      </a>
      <a className="-mx-3 block cursor-pointer px-12 py-2 text-xs hover:bg-gray-100 hover:text-lf-teal-600">
        Newest
      </a>
    </LfDropdown>
  )
}

export default SortByDropdown
