import { PropsWithChildren } from 'react'
import Link from './Link'

interface ChecklistContainerProps {
  title: string
  wiki: string
}

const ChecklistContainer = ({
  title,
  children,
  wiki,
}: PropsWithChildren<ChecklistContainerProps>) => {
  return (
    <div className="w-full">
      <h2 className="text-center text-3xl">
        <Link href={wiki}>{title}</Link>
      </h2>
      <div className="m-4 rounded-md bg-base-100 shadow-[0_0_16px_8px_rgba(30,156,170,0.25)]">
        <ul className="p-5">{children}</ul>
      </div>
    </div>
  )
}

export default ChecklistContainer
