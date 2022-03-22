import { RightArrowIcon } from './util/Icons'

type ArrowButtonProps = {
  title?: string
  url?: string
}

const ArrowButton = ({ title, url }: ArrowButtonProps) => {
  return (
    <a
      className="averta-semibold my-2 inline-block rounded-md bg-lf-teal py-6 px-12 text-white transition-all duration-200 ease-in-out hover:bg-lf-teal-dark hover:shadow-lg hover:shadow-lf-teal-100"
      href={url}
    >
      {title}
      <RightArrowIcon width="15" height="14" fill="white" />
    </a>
  )
}

export default ArrowButton
