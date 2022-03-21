import { ReactElement, ReactNode } from 'react'

type ComparisonBoxProps = {
  active: boolean
  format: string
  size: string
}

const ComparisonBox: React.FC<ComparisonBoxProps> = ({
  children,
  active,
  format,
  size,
}) => {
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
