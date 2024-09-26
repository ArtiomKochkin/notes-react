import { ReactNode } from "react"

interface ErrorProps {
    isError?: boolean,
    children?: ReactNode
}

export const Error = ({ isError, children }: ErrorProps) => {
 
    return (
        <>
            {isError && 
                <div className="text-center text-red-600">
                    {children 
                        ? children
                        : "Произошла ошибка. Что-то пошло не так!"
                    }
                </div>
            }
        </>
    )
}