import Link from '../common/components/Link'
import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
  return (
    <footer className="flex grow-0 flex-col items-center bg-accent p-2 text-center">
      <div>
        <Link href="https://github.com/dev0T/moon-RPG-Love-Checklist">
          <VscGithub className="p-1" size={35} />
        </Link>
      </div>
      <div>
        This page is a fan project. It is not affiliated with Onion Games.
      </div>
      <div>moon © Onion Games</div>
      <div>
        Made by <Link href="https://github.com/dev0T">dev0T</Link> &{' '}
        <Link href="https://github.com/salguerooo">salguerooo</Link>
      </div>
    </footer>
  )
}

export default Footer
