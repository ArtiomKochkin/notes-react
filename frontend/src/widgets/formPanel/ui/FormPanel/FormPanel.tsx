import { Login } from "@/features/login"
import { SignUp } from "@/features/signup"
import { InputType } from "@/shared/const"
import { Title, Input } from "@/shared/ui"
import { Link } from "react-router-dom"

interface FormPanelProps {
  title: string,
  addLink: {
    path: string,
    text: string,
    title: string
  }
}

export const FormPanel = ({ title, addLink }: FormPanelProps) => {

  return (
    <div className="custom-border shadow-md flex justify-center items-center flex-col py-6 px-4 w-full sm:w-2/3 mx-auto mt-[10%]">
      <Title isStartPage>{title}</Title>
      <form className="flex flex-col gap-3 w-full sm:w-2/3">
        <Input 
          placeholder="Логин"
          inputType={InputType.TEXT}
          isShow={false}
        />
        <Input 
          placeholder="Пароль"
          inputType={InputType.TEXT}
          isShow={false}
        />
        {title.toLowerCase() == "вход" ? <Login /> : <SignUp />}
      </form>
      <div className="mt-4 ">
        {addLink.text}
        <Link to={addLink.path} className="hover:border-b border-blue transition-all">{addLink.title}</Link>
      </div>
    </div>
  )
}