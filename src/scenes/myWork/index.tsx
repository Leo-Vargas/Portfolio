import { WorkCardType } from "@/shared/types"
import WorkCard from "./WorkCard"

const works: Array<WorkCardType> = [
  {
    name: "Work in progress",
    image: "image",
    link: "",
    tags: ["React", "Tailwind", "Vite"]
  },
  {
    name: "Work in progress",
    image: "",
    link: "",
    tags: ["React", "Tailwind", "etc"]
  },
  {
    name: "Work in progress",
    image: "",
    link: "",
    tags: ["React", "Tailwind", "etc"]
  },
]

type Props = {}

const MyWork = (props: Props) => {
  return (
    <section id="mywork" className="md:mt-20 pt-36">
      <div className="w-3/4 mx-auto">

        <h1 className="text-center font-semibold text-xl">
          My Latest Work
        </h1>
        <div className="md:mt-20 py-24 mx-auto flex flex-col sm:flex-row justify-between flex-wrap gap-y-14 gap-x-10 items-center">
          {works.map((item: WorkCardType, index) => (
            <WorkCard
              key={`${item.name}-${index}`}
              name={item.name}
              image={item.image}
              link={item.link}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWork