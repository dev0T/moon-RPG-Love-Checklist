import data from '../../data/data'
import Link from './Link'

interface LocationProps {
  locationName: string
}

const Location = ({ locationName }: LocationProps) => {
  const { locations } = data
  const locationInfo = locations.find(({ name }) => name === locationName)
  if (locationInfo) {
    return (
      <div className="dropdown-top dropdown-hover dropdown">
        <Link href={locationInfo.wiki}>{locationInfo.name}</Link>
        <div className="dropdown-end card dropdown-content left-1/2 mb-2 w-[472px] -translate-x-1/2 overflow-hidden border-2 border-white bg-base-100">
          <img
            className="-mb-8 -ml-[124px] -mr-[124px] -mt-12
                    max-h-[405px] max-w-[720px] "
            alt={`${locationInfo.name}`}
            src={locationInfo.image}
          />
        </div>
      </div>
    )
  } else {
    return <span>{locationName}</span>
  }
}

export default Location
