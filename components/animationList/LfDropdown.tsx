import { ReactNode, useEffect, useState } from 'react'

type LfDropdownProps = {
  title: string
  children?: ReactNode
}

const LfDropdown = ({ title, children }: LfDropdownProps) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.addEventListener('mousedown', () => {
      setOpen(false)
    })
  })
  function clickDropdown() {
    setOpen(!open)
  }
  return (
    <div className="relative">
      <div
        className={`text-lf-grey-darkest cursor-pointer rounded-md border border-gray-300 px-3 py-1 text-sm ${
          open ? 'bg-gray-100' : 'bg-white'
        }`}
        onClick={clickDropdown}
      >
        {title}
        <svg
          data-v-57a3d841=""
          fill="currentColor"
          viewBox="0 0 20 20"
          className="-mr-2 inline-block w-5"
        >
          <path
            data-v-57a3d841=""
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div
        className={`absolute mt-2 rounded-md border border-gray-300 bg-white p-3 ${
          open ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default LfDropdown
