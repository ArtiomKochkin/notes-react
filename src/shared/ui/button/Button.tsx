import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    createButton?: boolean,
}

const Button = ({ children, createButton, ...props }: ButtonProps) => {
    const { theme } = useTheme();
 
    return (
        <button 
            {...props}
            className={
                `button sm:px-8 
                ${createButton && "sm:w-2/3 flex-center justify-center mx-auto my-4"} 
                ${theme == Theme.LIGHT ? "text-dark hover:text-white" : "text-light hover:text-dark"}
            `}
        >
            {children}
        </button>
    )
}

export default Button;