import { InputType } from "@/shared/const";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputType: InputType,
    isShow: boolean
}

const extendedStyles = "w-[97vw] pl-10";
const searchStyles = "sm:pl-10 w-10 sm:w-full";

const Input = ({ inputType, isShow, ...props}: InputProps) => {
    
    return (
        <input
            className={`custom-border px-5 py-2 text-sm bg-light ${inputType == InputType.SEARCH && searchStyles} ${isShow && extendedStyles}`}
            {...props}
        />
    )
}

export default Input;