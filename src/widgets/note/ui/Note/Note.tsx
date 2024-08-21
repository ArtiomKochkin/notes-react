import { lazy, Suspense, useState } from "react";
import { NotesView } from "@/shared/const";
import { INote } from "@/shared/types";
import { Loading } from "@/shared/ui";

const ClosedNote = lazy(() => import("../ClosedNote/ClosedNote").then(module => ({ default: module.ClosedNote })));
const OpenedNote = lazy(() => import("../OpenedNote//OpenedNote").then(module => ({ default: module.OpenedNote })));

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
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            {!isOpenNote
                ? <ClosedNote note={note} view={view} toggleNote={toggleNote} isOpen={isOpenNote!}/>
                : <OpenedNote note={note} closeNote={toggleNote} isOpen={isOpenNote}/>
            }
        </Suspense>
    )
}