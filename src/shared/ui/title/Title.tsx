import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode
}

const Title = ({ children }: TitleProps) => {
 
    return (
        <h1 className="mb-4 text-center text-2xl font-bold sm-text-shadow sm:text-shadow">
            {children}
        </h1>
    )
}

export default Title;