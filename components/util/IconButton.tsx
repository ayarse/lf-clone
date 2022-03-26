import React from 'react'
import { HeartIcon, DownloadIcon } from './Icons'

type IconButtonProps = {
  label: string
  icon: 'heart' | 'download'
}

export const IconButton = ({ label, icon }: IconButtonProps) => {
  let renderIcon: JSX.Element | string = ''
  if (icon === 'download')
    renderIcon = <DownloadIcon fill="#0fccce" width="14" height="16" />
  if (icon === 'heart')
    renderIcon = (
      <HeartIcon fill="transparent" width="16" height="16" stroke="#0FCCCE" />
    )
  return (
    <a
      className="inline-block rounded-md bg-lf-grey bg-opacity-20 py-2 pl-3 pr-5 text-sm hover:bg-opacity-30"
      href="Download"
    >
      {renderIcon}
      {label}
    </a>
  )
}
