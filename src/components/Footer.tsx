const Footer = () => {
  return (
    <footer className="flex grow-0 flex-col items-center bg-accent p-2">
      <div>This page is not affiliated with Onion Games.</div>
      <div>moon © Onion Games</div>
      <div>
        Made by{' '}
        <a
          className="underline decoration-1 underline-offset-2"
          href="https://github.com/dev0T"
          target="_blank"
        >
          dev0T
        </a>{' '}
        &{' '}
        <a
          className="underline decoration-1 underline-offset-2"
          href="https://github.com/salguerooo"
          target="_blank"
        >
          salguerooo
        </a>
      </div>
    </footer>
  )
}

export default Footer
