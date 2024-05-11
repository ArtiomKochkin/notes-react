import { Button } from "@/shared/ui";
import { FaRegPlusSquare } from "react-icons/fa";

const CreateNoteButton = () => {
 
    return (
        <Button createNote>
            <span className="mr-2">Создать заметку</span>
            <FaRegPlusSquare />
        </Button>
    )
}

export default CreateNoteButton;