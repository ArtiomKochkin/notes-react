interface LastModifiedDateProps {
    date: string
}

const LastModifiedDate = ({ date }: LastModifiedDateProps) => {
 
    return (
        <div className="text-sm mt-2">
            Изменено: <span>{date}</span> 
        </div>
    )
}

export default LastModifiedDate;