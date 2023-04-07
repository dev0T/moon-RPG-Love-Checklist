import data from '../data/data'
import AnimalsChecklistItem from './AnimalsChecklistItem'
import ChecklistContainer from '../common/components/ChecklistContainer'

const AnimalsChecklist = () => {
  const { animals } = data

  return (
    <ChecklistContainer
      title="Animals"
      wiki="https://moonrpg.fandom.com/wiki/Category:Animals"
    >
      {animals.map((animal) => (
        <AnimalsChecklistItem {...animal} key={animal.name} />
      ))}
    </ChecklistContainer>
  )
}

export default AnimalsChecklist
