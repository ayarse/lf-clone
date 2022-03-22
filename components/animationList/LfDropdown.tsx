import { ReactNode, useEffect, useState } from 'react'
import { ChevronDownIcon } from '../util/Icons'

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
        <ChevronDownIcon />
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
