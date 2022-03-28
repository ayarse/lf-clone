import { ReactNode, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '../util'

type LfDropdownProps = {
  title: string
  children?: ReactNode
}

const LfDropdown = ({ title, children }: LfDropdownProps) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)
  const [listening, setListening] = useState(false)

  useEffect(
    listenForOutsideClicks(listening, setListening, dropdownRef, setOpen)
  )

  function clickDropdown() {
    setOpen(!open)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className={`cursor-pointer rounded-md border border-gray-300 px-3 py-1 text-sm text-lf-grey-darkest ${
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

function listenForOutsideClicks(
  listening,
  setListening,
  dropdownRef,
  setIsOpen
) {
  return () => {
    if (listening) return
    if (!dropdownRef.current) return
    setListening(true)
    ;[`click`, `touchstart`].forEach((_type) => {
      document.addEventListener(`click`, (evt) => {
        if (dropdownRef.current?.contains(evt.target)) return
        setIsOpen(false)
      })
    })
  }
}
