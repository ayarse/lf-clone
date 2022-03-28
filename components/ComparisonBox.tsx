import { ReactNode } from 'react'

type ComparisonBoxProps = {
  children: ReactNode
  active: boolean
  format: string
  size: string
}

const ComparisonBox = ({
  children,
  active,
  format,
  size,
}: ComparisonBoxProps) => {
  return (
    <div className="ml-6">
      <div
        className={`overflow-hidden rounded-2xl shadow-xl ${
          active ? 'border-2 border-lf-teal' : ''
        }`}
      >
        {children}
      </div>
      <div className="averta-regular flex justify-between p-4">
        <span className={active ? 'text-lf-teal' : 'text-lf-grey-dark'}>
          {format}
        </span>
        <span className="text-lf-grey">{size}</span>
      </div>
    </div>
  )
}

export default ComparisonBox
