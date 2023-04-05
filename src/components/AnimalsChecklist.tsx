import data from '../data/data'
import AnimalsChecklistItem from './AnimalsChecklistItem'
import ChecklistContainer from '../common/ChecklistContainer'

const AnimalsChecklist = () => {
  const { animals } = data

  return (
    <ChecklistContainer title={'Animals'}>
      {animals.map((animal) => (
        <AnimalsChecklistItem {...animal} key={animal.name} />
      ))}
    </ChecklistContainer>
  )
}

export default AnimalsChecklist
