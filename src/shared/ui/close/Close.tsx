import { MdOutlineClose } from "react-icons/md";

interface CloseProps {
    closeElement: () => void
}

export const Close = ({ closeElement }: CloseProps) => {
 
    return (
        <div onClick={() => closeElement()} title="Закрыть">
            <MdOutlineClose/>
        </div>
    )
}