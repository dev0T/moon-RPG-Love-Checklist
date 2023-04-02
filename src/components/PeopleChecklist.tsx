import data from '../data/moon_data.json'

const PeopleChecklist = () => {
  const { people } = data

  return (
    <div>
      <h2 className="text-center text-3xl">People</h2>
      <div className="bg-black m-4">
        <ul>
          {people.map(({ name, wiki }) => (
            <li key={name} className="m-3 ">
              <div className="form-control w-52">
                <label
                  className="cursor-pointer label justify-start whitespace-nowrap"
                  htmlFor={name}
                >
                  <input
                    id={name}
                    type="checkbox"
                    name="progress"
                    data-key={name}
                    className="checkbox checkbox-secondary checkbox-md "
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PeopleChecklist
