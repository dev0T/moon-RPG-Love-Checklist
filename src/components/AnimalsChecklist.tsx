import data from '../data/moon_data.json'

const AnimalsChecklist = () => {
  const { animals } = data

  return (
    <div>
      <h2 className="text-center text-3xl">Animals</h2>
      <div className="bg-black m-4">
        <ul>
          {animals.map(({ name, love, wiki, location }) => (
            <li key={name} className="m-3 ">
              <div className="form-control w-52">
                <label
                  className="cursor-powhitespace-nowrapinter label justify-start whitespace-nowrap"
                  htmlFor={name}
                >
                  <input
                    id={name}
                    type="checkbox"
                    name="progress"
                    data-key={name}
                    data-love={love}
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
                    {` - ${location} - ${love}`}
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

export default AnimalsChecklist
