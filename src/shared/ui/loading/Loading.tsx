import { ReactNode } from "react";

interface LoadingProps {
    children: ReactNode,
    isLoading?: boolean
}

const Loading = ({ children, isLoading }: LoadingProps) => {
 
    return (
        <>
            {isLoading && <div className="text-center">
                {children}
            </div>}
        </>
    )
}

export default Loading;