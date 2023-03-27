import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
  selectedPage: string
  setSelectedPage: (value: string) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "")

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "font-bold text-black" : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link