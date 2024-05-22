import { NoteView, NotesView } from "@/shared/const";
import { useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";

interface NoteContentPRops {
    type: NoteView,
    note: INote,
    view?: NotesView
}

const NoteContent = ({ type, note, view }: NoteContentPRops) => {
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange
    } = useEdit(note, note.content, "content");

    return (
        <div
            onClick={handleDivClick}
            className={type == NoteView.OPENED ? "my-2 flex-grow cursor-text" : `py-2 leading-5 ${view == NotesView.GRID ? "line-clamp-6 sm:line-clamp-5 lg:line-clamp-4" : "line-clamp-4"}`}
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