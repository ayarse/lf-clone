import Link from 'next/link'
import { ChevronDownIcon } from '../util'

type NavbarItemProps = {
  name: string
  href: string
  color: string
}

export const NavbarItem = ({ name, href, color }: NavbarItemProps) => {
  return (
    <Link href={href}>
      <a
        className={`averta-regular flex h-full w-28 flex-col justify-center text-center text-lf-grey-darker hover:border-b-2 hover:border-b-${color} hover:pt-0.5`}
      >
        <div className="flex items-center justify-center">
          {name}
          <ChevronDownIcon
            width="11"
            height="6"
            fill="#000"
            className="mx-2 opacity-60 md:mt-1"
          />
        </div>
      </a>
    </Link>
  )
}

export default NavbarItem
