interface ErrorProps {
    isError?: boolean
}

export const Error = ({ isError}: ErrorProps) => {
 
    return (
        <>
            {isError && 
                <div className="text-center text-red-600">
                    Произошла ошибка. Что-то пошло не так!
                </div>
            }
        </>
    )
}