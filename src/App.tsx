import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import AboutMe from "./scenes/aboutMe"
import MyWork from "./scenes/myWork"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import ContactMe from "./scenes/contactMe"


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  )
}

export default App
