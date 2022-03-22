import Link from 'next/link'

const Subnav = () => {
  return (
    <div className="relative w-full bg-white py-3 shadow-md shadow-gray-200">
      <nav className="averta-regula text-center text-sm text-lf-grey-dark">
        <Link href="/featured">
          <a className="mx-3 inline-block hover:text-lf-teal-600">Featured</a>
        </Link>
        <Link href="/popular">
          <a className="mx-3 inline-block hover:text-lf-teal-600">Popular</a>
        </Link>
        <a className="mx-3 inline-block hover:text-lf-teal-600" href="#">
          Animators
        </a>
        <a className="mx-3 inline-block hover:text-lf-teal-600" href="#">
          Marketplace
        </a>
        <a className="mx-3 inline-block hover:text-lf-teal-600" href="#">
          Categories
        </a>
      </nav>
    </div>
  )
}

export default Subnav
