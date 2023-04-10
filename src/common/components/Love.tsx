import heart from '../../../assets/heart.svg'

interface LoveProps {
  amount: number
}

const Love = ({ amount }: LoveProps) => {
  return (
    <span>
      {` ${amount} `}
      <img className="-mt-[2px] inline h-4" src={heart} />
    </span>
  )
}

export default Love
