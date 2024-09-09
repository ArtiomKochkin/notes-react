import { FormPanel } from "@/widgets/formPanel";
import { useEffect } from "react"

export const SignUpPage = () => {
  useEffect(() => {
    document.title = "Регистрация | Notes";
  }, []);

  return (
    <div className="pt-14 min-h-screen sm:pt-[70px] p-4">
      <FormPanel 
        title="Регистрация"
        addLink={{
          path: "/login",
          text: "Уже есть аккаунт?",
          title: " Вход"
        }}
      />
    </div>
  )
}