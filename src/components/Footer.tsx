const Footer = () => {
  return (
    <footer className="flex flex-col grow-0 bg-green-950 items-center p-10">
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
