import Link from 'next/link'

type NavbarItemProps = {
  name: string
  href: string
  color: string
}

const NavbarItem = ({ name, href, color }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <a
        className={`text-grey-darker averta-regular flex h-full w-28 flex-col justify-center text-center hover:border-b-2 hover:border-b-${color} hover:pt-0.5`}
      >
        <div className="flex items-center justify-center">
          {name}
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2 opacity-30 md:mt-1"
          >
            <path d="M2.03243 0.261745L5.50447 3.73379L8.97651 0.261745C9.3255 -0.0872484 9.88926 -0.0872484 10.2383 0.261745C10.5872 0.610739 10.5872 1.1745 10.2383 1.52349L6.13087 5.63088C5.78187 5.97987 5.21811 5.97987 4.86912 5.63088L0.761732 1.52349C0.594168 1.3563 0.5 1.12932 0.5 0.892619C0.5 0.655913 0.594168 0.428933 0.761732 0.261745C1.11073 -0.0782999 1.68343 -0.0872484 2.03243 0.261745Z"></path>
          </svg>
        </div>
      </a>
    </Link>
  )
}

export default NavbarItem
