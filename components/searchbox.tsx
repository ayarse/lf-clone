const SearchBox = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for animations"
        className="bg-search-icon w-4/6 rounded-lg border border-gray-200 p-2 pl-8 text-sm shadow-md shadow-gray-100 transition-all duration-200 hover:border-lf-teal hover:bg-lf-teal hover:text-white hover:placeholder:text-teal-100 focus:outline-none"
      />
    </form>
  )
}

export default SearchBox
