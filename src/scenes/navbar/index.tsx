import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Flower1PurpleOrange from "@/assets/Flower1PurpleOrange.svg"
import { SelectedPage } from "@/shared/types"
import Link from "./Link"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const pageNames: Array<string> = ["Home", "About Me", "My Work", "Contact Me"]
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-3`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          
          <div className="flex-1">
            <img alt="flower logo" src={Flower1PurpleOrange} className="h-10 w-10"/>
          </div>

          <div className="hidden md:flex items-center justify-between flex-none gap-5 ml-0 text-sm">
            {pageNames.map((pageName, index) => (
              <Link 
                key={`${pageName}-${index}`}
                page={pageName}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>

          <div className="flex md:hidden">
            <button
             className="p-2"
             onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-secondary-grey"/>
            </button>  
          </div>
        </div>
      </div>

      {isMenuToggled && (
        <div className="md:hidden fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-green">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-secondary-grey"/>
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10">
          {pageNames.map((pageName, index) => (
              <Link 
                key={`${pageName}-${index}`}
                page={pageName}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar