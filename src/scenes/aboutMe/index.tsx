import Avatar from "@/assets/Avatar.png"

type Props = {}

const AboutMe = (props: Props) => {

const spanStyles = "bg-primary-green text-white py-1 px-3 leading-[23px] sm:leading-[26px] rounded-bl rounded-tr rounded-tl-2xl rounded-br-2xl drop-shadow"

  return (
    <section id="aboutme" className="mt-20 md:mt-64 py-36 bg-primary-pink"> 
      <div className="w-3/4 mx-auto flex flex-col md:flex-row justify-around items-center gap-5">

        <div className="flex flex-col gap-1">
          <img alt="My avatar" src={Avatar} className="w-48 h-48 border-2 border-black"/>
          <p className="font-semibold underline mt-3">Leonardo Vargas</p>
          <p className="w-48">Electrical Engineer & Front-End Developer</p>
        </div>
        <div className="md:w-1/2 w-full mt-2 sm:mt-0">
          <p className="font-semibold">Bio:</p>
          <p className="text-justify text-sm sm:text-base">
            <span className={`${spanStyles}`}>Electrical engineer</span> turned <span className={`${spanStyles}`}>front-end developer</span>, I graduated from university back in 2022.
            During my time there I learned how to program and immediately fell in love with it, taking several classes from <span className={`${spanStyles}`}>computer science</span> during my graduation.
            It was not until my last semester at the university that I decided to make a career change, when I had the opportunity to take an <span className={`${spanStyles}`}>internship as a software developer.</span> 
            <br/>Ever since I've been studying on my own and honing my skills as a front-end developer. 
            I am very <span className={`${spanStyles}`}>passionate about art</span> and creating stuff, both physical and virtual, like websites. 
 
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe