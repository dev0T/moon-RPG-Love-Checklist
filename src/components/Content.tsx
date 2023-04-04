import AnimalsChecklist from './AnimalsChecklist'
import PeopleChecklist from './PeopleChecklist'
import { useChecklistStore } from '../store/checklistStore'
import data from '../data/moon_data.json'

const Content = () => {
  const { levels } = data
  const [love] = useChecklistStore((state) => [state.love])

  const loveLevel = 1 // TODO

  return (
    <main className="flex grow flex-col w-240 m-6">
      <h2 className="text-center text-lg mb-5">
        {`Love Level ${loveLevel} - ${levels[loveLevel].name} -  ${love}/200`}
      </h2>
      <div className="flex">
        <div className="grow w-3/6 m-4">
          <AnimalsChecklist />
        </div>
        <div className="grow w-3/6 m-4">
          <PeopleChecklist />
        </div>
      </div>
    </main>
  )
}

export default Content
