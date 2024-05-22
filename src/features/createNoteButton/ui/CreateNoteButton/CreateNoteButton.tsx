import { useCreateNoteMutation } from "@/entities/notes";
import { INoteData } from "@/shared/types";
import { Button } from "@/shared/ui";
import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

const defaultValue: INoteData = {
    name: "Name",
    content: "Content",
    isArchive: false,
    isPinned: false,
    isTrash: false,
    lastModifiedDate: "date",
    background: "",
    labels: [
        {
            id: 1,
            name: "One"
        },
    ]
}

const CreateNoteButton = () => {
    const [note, setNote] = useState<INoteData>(defaultValue);
    const [createNote] = useCreateNoteMutation();
 
    const handleSubmit = () => {
        createNote(note).then(() => {
            setNote(defaultValue);
        });
        console.log(note);
    }

    return (
        <Button createNote onClick={handleSubmit}>
            <span className="mr-2">Создать заметку</span>
            <FaRegPlusSquare />
        </Button>
    )
}

export default CreateNoteButton;