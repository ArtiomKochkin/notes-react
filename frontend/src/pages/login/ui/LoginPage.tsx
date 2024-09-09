import { FormPanel } from "@/widgets/formPanel";
import { useEffect } from "react"

export const LoginPage = () => {
  useEffect(() => {
    document.title = "Вход | Notes";
  }, []);

  return (
    <div className="pt-14 min-h-screen sm:pt-[70px] p-4">
      <FormPanel 
        title="Вход"
        addLink={{
          path: "/sign-up",
          text: "Еще нет аккаунта?",
          title: " Регистрация"
        }}
      />
    </div>
  )
}