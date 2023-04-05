import { PropsWithChildren } from 'react'
import data from '../data/moon_data.json'

interface ChecklistContainerProps {
  title: string
}

const ChecklistContainer = ({
  title,
  children,
}: PropsWithChildren<ChecklistContainerProps>) => {
  return (
    <div>
      <h2 className="text-center text-3xl">{title}</h2>
      <div className="m-4 rounded-md bg-base-100 shadow-[0_0_16px_8px_rgba(30,156,170,0.25)]">
        <ul className="p-5">{children}</ul>
      </div>
    </div>
  )
}

export default ChecklistContainer
