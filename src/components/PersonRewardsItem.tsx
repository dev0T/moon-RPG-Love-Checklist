import { ChecklistTypes, useChecklistStore } from '../store/checklistStore'

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
    <li>
      <div className="form-control w-48 ml-8">
        <label
          className="cursor-pointer label justify-start whitespace-nowrap"
          htmlFor={itemId}
        >
          <input
            id={itemId}
            type="checkbox"
            name="progress"
            data-key={itemId}
            className="checkbox checkbox-secondary checkbox-md"
            onChange={handleRewardListToggle}
            checked={isChecked}
          />
          <span className="label-text ml-4 text-xl">{`${location} - ${love}`}</span>
        </label>
      </div>
    </li>
  )
}

export default PersonRewardsItem
