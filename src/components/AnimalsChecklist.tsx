import data from '../data/moon_data.json'
import AnimalsChecklistItem from './AnimalsChecklistItem'

const AnimalsChecklist = () => {
  const { animals } = data

  return (
    <div>
      <h2 className="text-center text-3xl">Animals</h2>
      <div className="m-4 bg-base-100">
        <ul>
          {animals.map((animal) => (
            <AnimalsChecklistItem {...animal} key={animal.name} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AnimalsChecklist
