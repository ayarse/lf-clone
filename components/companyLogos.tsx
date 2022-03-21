type CompanyLogoProps = {
  items: string[]
}

const CompanyLogos = ({ items }: CompanyLogoProps) => {
  return (
    <ul className="mx-auto flex w-3/4 justify-center py-12">
      {items.map((company) => (
        <li key={company} className="px-5 opacity-30">
          <img src={`/companies/${company}`} alt="" />
        </li>
      ))}
    </ul>
  )
}

export default CompanyLogos
