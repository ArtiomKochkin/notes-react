import { getModifiedDate } from "../utils/getModifiedDate";

interface LastModifiedDateProps {
    date: Date | string
}

const LastModifiedDate = ({ date }: LastModifiedDateProps) => {
    const correctDate = getModifiedDate(date);
 
    return (
        <div className="text-sm mt-2">
            Изменено: <span>{correctDate}</span> 
        </div>
    )
}

export default LastModifiedDate;