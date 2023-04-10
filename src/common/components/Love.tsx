import { VscHeartFilled } from 'react-icons/vsc'

interface LoveProps {
  amount: number
}

const Love = ({ amount }: LoveProps) => {
  return (
    <span>
      {` ${amount} `}
      <VscHeartFilled className="-mt-[2px] inline h-4" size={13} color="red" />
    </span>
  )
}

export default Love
