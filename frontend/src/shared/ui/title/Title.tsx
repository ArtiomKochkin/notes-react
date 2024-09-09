import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode,
    isStartPage?: boolean
}

export const Title = ({ children, isStartPage }: TitleProps) => {
 
    return (
        <h1 className={`
            text-xl sm-text-shadow sm:text-shadow
            ${isStartPage 
                ? "sm:text-3xl mb-4"
                : "my-4 text-center sm:text-2xl font-bold" 
            }
        `}>
            {children}
        </h1>
    )
}