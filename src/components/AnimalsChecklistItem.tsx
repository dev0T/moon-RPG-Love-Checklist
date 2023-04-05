import { useChecklistStore } from '../store/checklistStore'
import { ChecklistTypes } from '../utils/types'

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
      <div className="form-control w-52">
        <label
          className="label justify-start whitespace-nowrap p-0"
          htmlFor={name}
        >
          <input
            id={name}
            type="checkbox"
            name="progress"
            data-key={name}
            data-love={love}
            className="checkbox-secondary checkbox checkbox-md"
            checked={isChecked}
            onChange={handleChecklistItemChange}
          />
          <span className="label-text ml-4 text-xl">
            <a
              href={wiki}
              target="_blank"
              className="underline decoration-1 underline-offset-2"
            >
              {name}
            </a>
            {` - ${location} - ${love}`}
          </span>
        </label>
      </div>
    </li>
  )
}

export default AnimalsChecklistItem
