import Tag from "./Tag"
import meWorking from "@/assets/working.svg"

type Props = {
  name: string
  image: string
  link: string
  tags: Array<string>
}

const WorkCard = ({ name, image, link, tags }: Props) => {
  return (
    <div className="md:w-80 w-60">

      { image === "" ? 
        <div className="md:w-80 md:h-80 w-60 h-60 border-2 relative bg-primary-pink border-black">
          <div className="md:w-[304px] md:h-[304px] h-[224px] w-[224px] absolute bg-secondary-grey left-[6px] top-[6px] z-10" />
          <div className="md:w-[292px] md:h-[292px] h-[212px] w-[212px] absolute bg-primary-pink left-[12px] top-[12px] z-20
            flex flex-col justify-evenly items-center" 
          >
            <img alt="illustration of a programmer" src={meWorking} className="h-1/3 w-1/3"/>
            <h2 className="text-center font-semibold text-4xl leading-7">
              Work in <br/> Progress
            </h2>
          </div>
        </div>
       :
        <div className="md:w-80 md:h-80 w-60 h-60 border-2 border-black"> 
          <img alt={`${name} website illustration`} src={image}/>
        </div>
      }

      <div className="flex flex-col justify-evenly">
        <p className="mt-4 font-semibold">{name}</p>
        <div className="flex gap-[2px] flex-wrap">
          {tags.map((item: string, index) => (
            <Tag
              key={`${item}-${index}`}
              tag={item} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkCard