import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Flower3YellowOrange from "@/assets/Flower3YellowOrange.svg"
import Flower2GreenPurple from "@/assets/Flower2GreenPurple.svg"
import Flower1PinkYellow from "@/assets/Flower1PinkYellow.svg"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  return (
  <section id="home" className="gap-16 py-10 md:h-full">
    <div className="w-3/4 md:flex mx-auto items-center justify-center">
      
      <div className="z-10 mt-32 md:basis-3/5">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold">Hey there, I'm</p>
          <h1 className="font-semibold sm:text-8xl text-6xl">Leonardo</h1>
          <h1 className="font-semibold sm:text-8xl text-6xl">Vargas</h1>
          <p className="py-2">
            Front End Developer based in Brazil.
          </p>
          <div className="flex w-64 justify-around items-center">
            <AnchorLink
              className="rounded-md bg-primary-green text-secondary-pink px-7 py-2 hover:text-primary-purple"
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            >
              Hire me
            </AnchorLink>
            <AnchorLink
              className="underline hover:text-secondary-purple"
              onClick={() => setSelectedPage(SelectedPage.ContactMe)}
              href={`#${SelectedPage.ContactMe}`}
            >
              Learn More
            </AnchorLink>
          </div>
        </div>
      </div>
      
      <div className="flex basis-3/5 justify-center mt-4 md:ml-3 md:mt-16 md:justify-items-end">
        <div className="relative md:h-[500px] md:w-[500px] sm:h-[400px] sm:w-[400px] h-[300px] w-[300px]">
          <img alt="medium 70's inspired pink flower" src={Flower1PinkYellow} className="absolute h-1/2 w-1/2 left-0 top-0 z-10"/>
          <img alt="big 70's inspired orange flower" src={Flower3YellowOrange} className="absolute h-3/4 w-3/4 right-0 bottom-0"/>
          <img alt="small 70's inspired purple flower" src={Flower2GreenPurple} className="absolute h-1/4 w-1/4 bottom-0 left-1"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home