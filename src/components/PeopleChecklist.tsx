import ChecklistContainer from '../common/components/ChecklistContainer'
import data from '../data/data'
import PeopleChecklistItem from './PeopleChecklistItem'

const PeopleChecklist = () => {
  const { people } = data

  return (
    <ChecklistContainer
      title="People"
      wiki="https://moonrpg.breezewiki.com/wiki/Category:Characters"
    >
      {people.map((person) => (
        <PeopleChecklistItem {...person} key={person.name} />
      ))}
    </ChecklistContainer>
  )
}

export default PeopleChecklist
