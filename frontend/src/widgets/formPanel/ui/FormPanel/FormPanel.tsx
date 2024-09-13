import { Login } from "@/features/login"
import { SignUp } from "@/features/signup"
import { InputType } from "@/shared/const"
import { IAuthRequest } from "@/shared/types"
import { Title, Input } from "@/shared/ui"
import { useState } from "react"
import { Link } from "react-router-dom"

interface FormPanelProps {
  title: string,
  addLink: {
    path: string,
    text: string,
    title: string
  }
}

const initialState: IAuthRequest = {
  username: "",
  password: ""
};

export const FormPanel = ({ title, addLink }: FormPanelProps) => {
  const [credentials, setCredentials] = useState<IAuthRequest>(initialState);

  return (
    <div className="custom-border shadow-md flex justify-center items-center flex-col py-6 px-4 w-full sm:w-2/3 mx-auto mt-[10%]">
      <Title isStartPage>{title}</Title>
      <form className="flex flex-col gap-3 w-full sm:w-2/3">
        <Input 
          placeholder="Логин"
          inputType={InputType.TEXT}
          isShow={false}
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })}
        />
        <Input 
          type="password"
          placeholder="Пароль"
          inputType={InputType.TEXT}
          isShow={false}
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })}
        />
        {title.toLowerCase() == "вход" 
          ? <Login credentials={credentials}/> 
          : <SignUp credentials={credentials}/>
        }
      </form>
      <div className="mt-4 ">
        {addLink.text}
        <Link to={addLink.path} className="hover:border-b border-blue transition-all">{addLink.title}</Link>
      </div>
    </div>
  )
}