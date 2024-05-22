import { RefObject } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DotsProps {
    refElement: RefObject<HTMLDivElement>,
    show: boolean,
    setShow: (show: boolean) => void
}

const Dots = ({ refElement, show, setShow }: DotsProps) => {
 
    return (
        <div ref={refElement} onClick={() => setShow(!show)}>
            <BsThreeDotsVertical />
        </div>
    )
}

export default Dots;