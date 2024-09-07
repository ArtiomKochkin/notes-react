import { RefObject } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DotsProps {
    refElement: RefObject<HTMLDivElement>,
    show: boolean,
    setShow: (show: boolean) => void
}

export const Dots = ({ refElement, show, setShow }: DotsProps) => {
 
    return (
        <div 
            ref={refElement} 
            onClick={() => setShow(!show)}
            title="Настройки заметки"
        >
            <BsThreeDotsVertical />
        </div>
    )
}