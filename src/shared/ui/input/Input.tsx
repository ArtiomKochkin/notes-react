import { InputType, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: InputType,
    isShow: boolean
}

const searchStyles = "pl-8 sm:pl-10 w-10 sm:w-full";

const Input = ({ inputType, isShow, ...props}: InputProps) => {
    const { theme } = useTheme();
    
    return (
        <input
            className={`custom-border px-5 py-2 text-sm ${isShow ? "w-[97vw] pl-10" : "pl-5"} ${inputType == InputType.SEARCH && searchStyles} ${theme == Theme.LIGHT ? "bg-light placeholder:text-dark" : "bg-dark placeholder:text-light"}`}
            {...props}
        />
    )
}

export default Input;