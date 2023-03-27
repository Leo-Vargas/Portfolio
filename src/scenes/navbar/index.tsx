import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Flower1PurpleOrange from "@/assets/Flower1PurpleOrange.svg"

type Props = {
  selectedPage: string
  setSelectedPage: (value: string) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-1`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          
          <div className="flex-1">
            <img alt="flower logo" src={Flower1PurpleOrange} className="h-10 w-10"/>
          </div>

          <div className="hidden md:flex items-center justify-between flex-none gap-5 ml-0 text-sm">
            <p>Home</p>
            <p>About Me</p>
            <p>My Work</p>
            <p>Contact Me</p>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar