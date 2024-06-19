import { NotesView } from "@/shared/const";
import { INote } from "@/shared/types";
import { useState } from "react";
import { ClosedNote } from "../ClosedNote/ClosedNote";
import { OpenedNote } from "../OpenedNote/OpenedNote";

interface NoteProps {
    view: NotesView,
    note: INote,
    isNewNote?: boolean,
    toggleNewNote?: () => void
}

export const Note = ({ view, note, isNewNote, toggleNewNote }: NoteProps) => {
    const [isOpenNote, setIsOpenNote] = useState(isNewNote);

    const toggleNote = () => {
        if (isNewNote && toggleNewNote) {
            toggleNewNote();
            setIsOpenNote(false);
            window.location.reload();
        } else {
            setIsOpenNote((prev) => !prev);
        }
    };
 
    return (
        <>
            {!isOpenNote
                ? <ClosedNote note={note} view={view} toggleNote={toggleNote} isOpen={isOpenNote!}/>
                : <OpenedNote note={note} closeNote={toggleNote} isOpen={isOpenNote}/>
            }
        </>
    )
}