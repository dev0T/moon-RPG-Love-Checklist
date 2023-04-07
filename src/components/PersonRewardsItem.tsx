import { useChecklistStore } from '../store/checklistStore'
import { ChecklistTypes } from '../utils/types'
import Location from './Location'
import Love from './Love'

interface PersonRewardsItemProps {
  id: number
  location: string
  love: number
  personName: string
}

const PersonRewardsItem = ({
  id,
  personName,
  location,
  love,
}: PersonRewardsItemProps) => {
  const [people, toggle] = useChecklistStore((state) => [
    state.people,
    state.toggle,
  ])

  const itemId = `${personName}-${id}`

  const isChecked = people.includes(itemId)

  const handleRewardListToggle = () => {
    toggle(itemId, love, ChecklistTypes.People)
  }

  return (
    <li className="mb-3 last:mb-0">
      <div className="form-control ml-8 w-48">
        <label
          className="label justify-start whitespace-nowrap p-0"
          htmlFor={itemId}
        >
          <input
            id={itemId}
            type="checkbox"
            name="progress"
            data-key={itemId}
            className="checkbox-secondary checkbox checkbox-md"
            onChange={handleRewardListToggle}
            checked={isChecked}
          />
          <span className="label-text ml-4 text-xl">
            <Location locationName={location} />
            {` - `}
            <Love amount={love} />
          </span>
        </label>
      </div>
    </li>
  )
}

export default PersonRewardsItem
