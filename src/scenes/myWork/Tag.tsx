type Props = {
  tag: string
}

const Tag = ({ tag }: Props) => {

  let bgColor: string
  
  switch (tag) {
    case 'React':
      bgColor = 'bg-[#6e92ff]'
      break
    case 'Tailwind':
      bgColor = 'bg-[#66ccfa]'
      break
    case 'Vite':
      bgColor = 'bg-[#BEAFF2]'
      break
    default:
      bgColor = 'bg-[#F3F3F3]'
  }


  return (
    <div className={`text-sm px-2 ${bgColor} rounded-xl`}>
      {tag}
    </div>
  )
}

export default Tag