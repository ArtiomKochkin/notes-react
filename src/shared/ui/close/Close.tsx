import { MdOutlineClose } from "react-icons/md";

interface CloseProps {
    closeElement: () => void
}

const Close = ({ closeElement }: CloseProps) => {
 
    return (
        <div onClick={() => closeElement()}>
            <MdOutlineClose/>
        </div>
    )
}

export default Close;