import { ReactNode } from 'react'

type AvatarProps = {
  name?: string
  initials?: boolean
  url: string | (() => string)
  children?: ReactNode
}

const Avatar = ({ url, children }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <img
        className="aspect-square w-full rounded-full object-cover"
        src={typeof url === 'string' ? url : url()}
        alt=""
      />
      <div className="mx-2">{children}</div>
    </div>
  )
}

Avatar.defaultProps = {
  url: () =>
    `https://avatars.dicebear.com/api/micah/${Math.floor(
      Math.random() * 100
    )}.svg`,
}

export default Avatar
