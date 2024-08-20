import { ButtonHTMLAttributes, ReactNode } from "react";
import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    createButton?: boolean,
}

export const Button = ({ children, createButton, ...props }: ButtonProps) => {
    const { theme } = useTheme();
 
    return (
        <button 
            {...props}
            className={
                `button sm:px-8 text-inherit leading-4
                ${createButton && "sm:w-2/3 flex-center justify-center mx-auto my-4"} 
                ${theme == Theme.LIGHT ? "hover:text-white" : "hover:text-dark"}
            `}
        >
            {children}
        </button>
    )
}