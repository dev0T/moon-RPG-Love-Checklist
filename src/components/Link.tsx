const Link = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  return (
    <a
      className="underline decoration-1 underline-offset-2"
      target="_blank"
      {...props}
    />
  )
}

export default Link
