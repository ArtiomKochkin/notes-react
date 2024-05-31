import { useUpdateNoteMutation } from "@/entities/notes";
import { NoteView, NotesView } from "@/shared/const";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";

interface NoteContentPRops {
    type: NoteView,
    note: INote,
    view?: NotesView
}

const NoteContent = ({ type, note, view }: NoteContentPRops) => {
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange
    } = useEdit(note, note.content, "content", updNote, 
        async (patch) => {
            const result = await updateNote(patch).unwrap();
            return result;
        }
    );

    return (
        <div
            onClick={handleDivClick}
            className={type == NoteView.OPENED ? "my-2 flex-grow cursor-text" : `py-2 leading-5 h-full ${view == NotesView.GRID ? "line-clamp-6 sm:line-clamp-5 lg:line-clamp-4" : "line-clamp-4"}`}
            >

            {isEditing ? (
                <textarea
                    className="bg-transparent w-full h-96 resize-none"
                    ref={inputRef as RefObject<HTMLTextAreaElement>}
                    value={text}
                    onChange={handleTextChange}
                    onBlur={handleInputBlur}
                    autoFocus
                ></textarea>
            ) : (
                <div>{text}</div>
            )}
        </div>
    )
}

export default NoteContent;