import AnimalsChecklist from './AnimalsChecklist'
import PeopleChecklist from './PeopleChecklist'
import { useChecklistStore } from '../store/checklistStore'
import data from '../data/moon_data.json'

interface LoveLevel {
  level: number
  name: string
  love: number
}

const Content = () => {
  const { levels } = data
  const [totalLove] = useChecklistStore((state) => [state.love])

  const calculateLoveLevel = (totalLove: number): LoveLevel => {
    const isCompleted = ({ love: levelLove }: LoveLevel) =>
      totalLove - levelLove >= 0

    const completedLoveLevels = levels.filter((level) => isCompleted(level))

    return completedLoveLevels[completedLoveLevels.length - 1]
  }

  const { level, name } = calculateLoveLevel(totalLove)

  return (
    <main className="flex w-240 grow flex-col">
      <h2 className="mb-5 mt-5 text-center text-lg">
        {`Love Level ${level} - ${name} - ${totalLove}/200`}
      </h2>
      <div className="flex">
        <div className="m-4 w-3/6 grow">
          <AnimalsChecklist />
        </div>
        <div className="m-4 w-3/6 grow">
          <PeopleChecklist />
        </div>
      </div>
    </main>
  )
}

export default Content
