import data from '../data/moon_data.json'
import ChecklistContainer from '../common/ChecklistContainer'
import PeopleChecklistItem from './PeopleChecklistItem'

const PeopleChecklist = () => {
  const { people } = data

  return (
    <ChecklistContainer title={'People'}>
      {people.map((person) => (
        <PeopleChecklistItem {...person} key={person.name} />
      ))}
    </ChecklistContainer>
  )
}

export default PeopleChecklist
