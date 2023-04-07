import AnimalsChecklist from './AnimalsChecklist'
import PeopleChecklist from './PeopleChecklist'
import { useChecklistStore } from '../store/checklistStore'
import data from '../data/data'

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

  const showRainbow = level === 30

  return (
    <main className="flex grow flex-col">
      <h2
        className={`mb-5 mt-5 text-center text-lg ${
          showRainbow ? 'rainbow' : ''
        }`}
      >
        {`Love Level ${level} - ${name} - ${totalLove}/200`}
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="m-4 flex-1">
          <AnimalsChecklist />
        </div>
        <div className="m-4 flex-1">
          <PeopleChecklist />
        </div>
      </div>
    </main>
  )
}

export default Content
