import { InputHTMLAttributes } from "react";
import { InputType, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: InputType,
    isShow: boolean
}

export const Input = ({ inputType, isShow, ...props}: InputProps) => {
    const { theme } = useTheme();
    
    return (
        <input
            className={
                `custom-border px-5 py-2 text-sm
                ${isShow ? "w-[97vw] pl-10" : "pl-5 sm:w-2/3"} 
                ${inputType == InputType.SEARCH && "pl-8 sm:pl-10 w-10 sm:w-full"} 
                ${theme == Theme.LIGHT ? "bg-light placeholder:text-dark" : "bg-dark placeholder:text-light"}`
            }
            {...props}
        />
    )
}