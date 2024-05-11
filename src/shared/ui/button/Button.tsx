import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    createNote?: boolean
}

const Button = ({ children, createNote, ...props }: ButtonProps) => {
 
    return (
        <button 
            className={`button sm:px-8 ${createNote && "sm:w-2/3 flex-center justify-center mx-auto my-4"}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;