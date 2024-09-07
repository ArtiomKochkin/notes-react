import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
 
    return (
        <h1 className="my-4 text-center text-xl sm:text-2xl font-bold sm-text-shadow sm:text-shadow">
            {children}
        </h1>
    )
}