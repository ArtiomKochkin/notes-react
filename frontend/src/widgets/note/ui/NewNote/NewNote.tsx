import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useCreateNoteMutation } from "@/entities/notes";
import { NotesView, defaultValueNote } from "@/shared/const";
import { Button } from "@/shared/ui";
import { INote } from "@/shared/types";
import { Note } from "../Note/Note";

interface NewNoteProps {
    view: NotesView,
}

export const NewNote = React.memo(({ view }: NewNoteProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [note] = useState<INote>(defaultValueNote);
    const [createNote, { data: newNote, isLoading}] = useCreateNoteMutation();

    const handleCreateNote = async (isListNote: boolean) => {
        try {
            await createNote({
                ...note,
                isList: isListNote
            }).unwrap();
            setIsOpen(true);
        } catch (err) {
            console.error('Failed to create note:', err);
        }
    };
    
    return (
        <div className="leading-5">
            <Button createButton onClick={() => handleCreateNote(false)} disabled={isLoading}>
                <span className="mr-2">Создать заметку</span>
                <FaRegPlusSquare />
            </Button>
            <Button createButton onClick={() => handleCreateNote(true)} disabled={isLoading}>
                <span className="mr-2">Создать заметку в виде списка</span>
                <FaRegPlusSquare />
            </Button>
            {isOpen && newNote && 
                <Note note={newNote} view={view} isNewNote={isOpen} toggleNewNote={() => setIsOpen(false)}/>
            }
        </div>
    )
})