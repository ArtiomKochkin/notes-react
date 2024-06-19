import { getModifiedDate } from "../lib";

interface LastModifiedDateProps {
    date: number
}

export const LastModifiedDate = ({ date }: LastModifiedDateProps) => {
    const correctDate = getModifiedDate(date);
 
    return (
        <div className="text-sm mx-0 mb-0 mt-auto pt-2">
            Изменено: <span>{correctDate}</span> 
        </div>
    )
}