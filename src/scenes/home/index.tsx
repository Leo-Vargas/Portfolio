import { SelectedPage } from "@/shared/types"
import Flower3YellowOrange from "@/assets/Flower3YellowOrange.svg"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  return (
  <section id="home" className="gap-16 py-10 md:h-full">
    <div className="w-5/6 md:flex mx-auto items-center justify-center">
      
      <div className="z-10 mt-32 md:basis-3/5">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold">Hey there, I'm</p>
          <h1 className="font-semibold sm:text-8xl text-6xl">Leonardo</h1>
          <h1 className="font-semibold sm:text-8xl text-6xl">Vargas</h1>
          <p>Front End Developer based in Brazil</p>
          <div className="flex">
            <button>Hire me</button>
            <p>Learn more</p>
          </div>
        </div>
      </div>
      
      <div className="flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
        <img alt="70's inspired orange flower" src={Flower3YellowOrange} className="h-14 w-14"/>
      </div>
    </div>
  </section>
  )
}

export default Home