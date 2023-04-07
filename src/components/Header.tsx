import imgUrl from '../../assets/moon_logo.png'

const Header = () => {
  return (
    <header className="flex grow flex-col items-center">
      <img src={imgUrl} className=" pointer-events-none mb-10 w-96" />
      <h1 className="drop-shadow-[3px_0px_8px_rgba(30, 156, 170, 1)] text-4xl font-bold">
        Love Checklist
      </h1>
    </header>
  )
}

export default Header
