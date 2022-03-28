import Link from 'next/link'
import { RightArrowIcon } from './util'

type ArrowButtonProps = {
  title?: string
  url?: string
}

const ArrowButton = ({ title, url }: ArrowButtonProps) => {
  return (
    <Link href={url ?? ''}>
      <a className="averta-semibold my-2 inline-block rounded-md bg-lf-teal py-6 px-12 text-white transition-all duration-200 ease-in-out hover:bg-lf-teal-dark hover:shadow-lg hover:shadow-lf-teal-100">
        {title}
        <RightArrowIcon width="15" height="14" fill="white" />
      </a>
    </Link>
  )
}

export default ArrowButton
