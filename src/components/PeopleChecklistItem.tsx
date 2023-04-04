import { useChecklistStore } from '../store/checklistStore'
import PersonRewardsItem from './PersonRewardsItem'

interface PeopleChecklistItemProps {
  name: string
  wiki: string
  loveRewards: Array<{
    id: number
    love: number
    location: string
  }>
}

const PeopleChecklistItem = ({
  name,
  wiki,
  loveRewards,
}: PeopleChecklistItemProps) => {
  const [people] = useChecklistStore((state) => [state.people])

  const isChecked = false // check if all children are checked

  return (
    <li className="m-3 ">
      <ul>
        <div className="form-control w-52">
          <label
            className="cursor-pointer label justify-start whitespace-nowrap"
            htmlFor={name}
          >
            <input
              id={`${name}`}
              type="checkbox"
              name="progress"
              data-key={name}
              checked={isChecked}
              className="checkbox checkbox-secondary checkbox-md"
              disabled
            />
            <span className="label-text ml-4 text-xl">
              <a
                href={wiki}
                target="_blank"
                className="underline decoration-1 underline-offset-2"
              >
                {name}
              </a>
            </span>
          </label>
        </div>
        {loveRewards.map((reward) => (
          <PersonRewardsItem {...reward} personName={name} key={reward.id} />
        ))}
      </ul>
    </li>
  )
}

export default PeopleChecklistItem
