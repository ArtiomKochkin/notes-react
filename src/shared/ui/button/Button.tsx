import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    createNote?: boolean
}

const Button = ({ children, createNote, ...props }: ButtonProps) => {
    const { theme } = useTheme();
 
    return (
        <button 
            className={`button sm:px-8 ${createNote && "sm:w-2/3 flex-center justify-center mx-auto my-4"} ${theme == Theme.LIGHT ? "text-dark hover:text-white" : "text-light hover:text-dark"}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;