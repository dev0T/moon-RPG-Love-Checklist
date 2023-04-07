import data from '../data/data'
import { useChecklistStore } from '../store/checklistStore'
import { ChecklistTypes } from '../utils/types'
import Link from './Link'
import Location from './Location'
import Love from './Love'

interface AnimalChecklistItemProps {
  name: string
  love: number
  wiki: string
  location: string
}

const AnimalsChecklistItem = ({
  name,
  love,
  wiki,
  location,
}: AnimalChecklistItemProps) => {
  const [animals, toggle] = useChecklistStore((state) => [
    state.animals,
    state.toggle,
  ])

  const isChecked = animals.includes(name)

  const handleChecklistItemChange = () => {
    toggle(name, love, ChecklistTypes.Animals)
  }

  return (
    <li className="mb-5 last:mb-0">
      <div className="form-control">
        <label
          className="label justify-start whitespace-nowrap p-0 w-full"
          htmlFor={name}
        >
          <input
            id={name}
            type="checkbox"
            name="progress"
            data-key={name}
            data-love={love}
            className="checkbox-secondary checkbox checkbox-sm lg:checkbox-md"
            checked={isChecked}
            onChange={handleChecklistItemChange}
          />
          <span className="label-text ml-4 text-base lg:text-xl">
            <Link href={wiki}>{name}</Link>
            {' - '}
            <Location locationName={location} />
            {` - `}
            <Love amount={love} />
          </span>
        </label>
      </div>
    </li>
  )
}

export default AnimalsChecklistItem
