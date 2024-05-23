import { useState } from "react";
import OpenedNote from "../OpenedNote/OpenedNote";
import { Button } from "@/shared/ui";
import { FaRegPlusSquare } from "react-icons/fa";
import { INoteData } from "@/shared/types";
import { useCreateNoteMutation } from "@/entities/notes";
import { closeNote } from "../../lib";
import { defaultValueNote } from "@/shared/const";

const NewNote = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [note] = useState<INoteData>(defaultValueNote);
    const [createNote, { data: newNote, isLoading}] = useCreateNoteMutation();

    const handleCreateNote = async () => {
        try {
            await createNote(note).unwrap();
            setIsOpen(true);
        } catch (err) {
            console.error('Failed to create note:', err);
        }
    }
 
    return (
        <div>
            <Button createButton onClick={handleCreateNote} disabled={isLoading}>
                <span className="mr-2">Создать заметку</span>
                <FaRegPlusSquare />
            </Button>
            {isOpen && newNote && <OpenedNote note={newNote} closeNote={() => closeNote(isOpen, setIsOpen)}/>}
        </div>
    )
}

export default NewNote;