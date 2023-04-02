import AnimalsChecklist from './AnimalsChecklist'
import PeopleChecklist from './PeopleChecklist'

const Content = () => {
    return (
        <main className="flex grow flex-col w-240 m-6">
            <h2 className="text-center text-xl">
                Love Level 1 - Love's Awakening - Total Love 0
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
