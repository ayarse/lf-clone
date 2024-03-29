import React, { ReactNode } from 'react'
import ReactDom from 'react-dom'
import { CloseIcon } from './Icons'

type ModelProps = {
  close: () => void
  open: boolean
  children: ReactNode
}

export const Modal = ({ open, close, children }: ModelProps) => {
  if (!open) return null
  return ReactDom.createPortal(
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-10 overflow-scroll bg-lf-teal-900 bg-opacity-30"
      onClick={close}
    >
      <div
        className="fixed right-0 z-40 m-6 h-10 w-10 cursor-pointer"
        onClick={close}
      >
        <CloseIcon fill="#000" className="h-12 w-12 opacity-50" />
      </div>
      <div
        className="relative z-40 mx-auto my-12 w-2/5 overflow-visible rounded-lg bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.querySelector('#portal') as HTMLElement
  )
}
