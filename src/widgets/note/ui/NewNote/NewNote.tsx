import { useState } from "react";
import { Button } from "@/shared/ui";
import { FaRegPlusSquare } from "react-icons/fa";
import { INoteData } from "@/shared/types";
import { useCreateNoteMutation } from "@/entities/notes";
import { NotesView, defaultValueNote } from "@/shared/const";
import { useActions } from "@/shared/lib/hooks";
import Note from "../Note/Note";

interface NewNoteProps {
    view: NotesView,
}

const NewNote = ({ view }: NewNoteProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [note] = useState<INoteData>(defaultValueNote);
    const { addNote } = useActions();
    const [createNote, { data: newNote, isLoading}] = useCreateNoteMutation();

    const handleCreateNote = async () => {
        try {
            const updNote = await createNote(note).unwrap();
            addNote(updNote);
            setIsOpen(true);
        } catch (err) {
            console.error('Failed to create note:', err);
        }
    };
 
    return (
        <div>
            <Button createButton onClick={handleCreateNote} disabled={isLoading}>
                <span className="mr-2">Создать заметку</span>
                <FaRegPlusSquare />
            </Button>
            {isOpen && newNote && 
                <Note note={newNote} view={view} isNewNote={isOpen} toggleNewNote={() => setIsOpen(false)}/>
            }
        </div>
    )
}

export default NewNote;