import { InputType, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: InputType,
    isShow: boolean
}

const extendedStyles = "w-[97vw] pl-10";
const searchStyles = "sm:pl-10 w-10 sm:w-full";

const Input = ({ inputType, isShow, ...props}: InputProps) => {
    const { theme } = useTheme();
    
    return (
        <input
            className={`custom-border px-5 py-2 text-sm bg-transparent ${inputType == InputType.SEARCH && searchStyles} ${isShow && extendedStyles} ${theme == Theme.LIGHT ? "placeholder:text-dark" : "placeholder:text-light"}`}
            {...props}
        />
    )
}

export default Input;