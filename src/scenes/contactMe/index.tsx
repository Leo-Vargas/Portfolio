import { useForm } from "react-hook-form"
import iconGithub from "@/assets/iconGithub.svg"
import iconLinkedin from "@/assets/iconLinkedin.svg"
import { MY_EMAIL } from "@/shared/email"

type Props = {}

const ContactMe = (props: Props) => {

  const {
    register,
    trigger,
    formState: { errors }

  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }


  return (
    <section id="contactme" className="my-28 pb-20">
      <div className="w-3/4 mx-auto">
        <div className="mb-10 bg-gray-300 w-full h-[2px]" />
        

        <div className="flex flex-col md:flex-row justify-between md:gap-0 gap-16">
          <div className="flex-1">
            <h1 className="font-semibold text-xl">Lets work together!</h1>
            <p className="mt-5 mb-1">
              Reach out to me through email or find me on
            </p>
            <div className="flex gap-2">
              <img alt="Github Logo" src={iconGithub} className="w-10 h-10 cursor-pointer"/>
              <img alt="Linkedin Logo" src={iconLinkedin} className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>

          <div className="flex-1">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action={`https://formsubmit.co/${MY_EMAIL}`}
              method="POST"
            >
              <input
                className="w-full bg-gray-300 px-5 py-3 placeholder-black"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}              
              />
              {errors.name && (
                <p className="mt-1 text-red-600">
                  {errors.name.type == "required" && "This field is required."}
                  {errors.name.type == "maxLength" && "Max Length is 100 characters."}
                </p>
              )}

              <input
                className="w-full bg-gray-300 px-5 py-3 placeholder-black mt-5"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  maxLength: 150,
                })}              
              />
              {errors.email && (
                <p className="mt-1 text-red-600">
                  {errors.email.type == "required" && "This field is required."}
                  {errors.email.type == "maxLength" && "Max Length is 150 characters."}
                  {errors.email.type == "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-gray-300 px-5 py-3 placeholder-black mt-5"
                rows={5}
                placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}              
              />
              {errors.message && (
                <p className="mt-[-4px] text-red-600">
                  {errors.message.type == "required" && "This field is required."}
                  {errors.message.type == "maxLength" && "Max Length is 2000 characters."}
                </p>
              )}

              <button type="submit" className="mt-5 bg-secondary-grey px-20 py-3 text-white">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe