import Link from 'next/link'
import Avatar from './avatar'
import NavbarItem from './navbarItem'
import SearchBox from './searchbox'

const navItems = [
  {
    name: 'Discover',
    href: '/search',
    color: 'lf-teal',
  },
  {
    name: 'Design',
    href: '',
    color: 'lf-green',
  },
  {
    name: 'Code',
    href: '',
    color: 'lf-blue',
  },
  {
    name: 'Learn',
    href: '',
    color: 'lf-violet',
  },
]

const Navbar = () => {
  return (
    <div className="h-24 bg-gray-50 shadow-xl shadow-gray-100">
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className="logo">
          <Link href="/">
            <a>
              <img className="" src="images/lottiefiles-logo.svg" alt="" />
            </a>
          </Link>
        </div>
        <nav className="text-red flex h-full flex-1 items-center justify-start pl-8">
          {/* Black Magic */}
          <div className="hidden border-2 hover:border-b-lf-teal"></div>
          <div className="hidden border-2 hover:border-b-lf-blue"></div>
          <div className="hidden border-2 hover:border-b-lf-violet"></div>
          <div className="hidden border-2 hover:border-b-lf-green"></div>
          {navItems.map((item) => (
            <NavbarItem
              key={item.name.toString()}
              name={item.name}
              href={item.href}
              color={item.color}
            />
          ))}
        </nav>
        <div className="flex-1 px-4 text-right">
          <SearchBox />
        </div>
        <Avatar />
      </div>
    </div>
  )
}

export default Navbar
