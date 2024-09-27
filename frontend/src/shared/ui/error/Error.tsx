import { ReactNode } from "react"

interface ErrorProps {
    isError?: boolean,
    isOAuth?: boolean,
    children?: ReactNode
}

export const Error = ({ isError, isOAuth, children }: ErrorProps) => {
 
    return (
        <>
            {isError && 
                <div className={`text-center text-red-600 ${isOAuth && "absolute left-0 top-0 pt-10"}`}>
                    {children 
                        ? children
                        : "Произошла ошибка. Что-то пошло не так!"
                    }
                </div>
            }
        </>
    )
}