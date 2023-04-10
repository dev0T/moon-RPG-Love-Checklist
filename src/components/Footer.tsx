import Link from '../common/components/Link'

const Footer = () => {
  return (
    <footer className="flex grow-0 flex-col items-center bg-accent p-2">
      <div>This page is not affiliated with Onion Games.</div>
      <div>moon © Onion Games</div>
      <div>
        Made by <Link href="https://github.com/dev0T">dev0T</Link> &{' '}
        <Link href="https://github.com/salguerooo">salguerooo</Link>
      </div>
    </footer>
  )
}

export default Footer
