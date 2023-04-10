import heart from '../../assets/moon_heart.jpg'

interface LoveProps {
  amount: number
}

const Love = ({ amount }: LoveProps) => {
  return (
    <span>
      {amount}
      <img className="inline" src={heart} />
    </span>
  )
}

export default Love
