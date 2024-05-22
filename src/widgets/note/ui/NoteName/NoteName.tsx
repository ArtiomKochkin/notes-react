import { NoteView } from "@/shared/const";
import { useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";

interface NoteNameProps {
    type: NoteView,
    note: INote
}

const NoteName = ({ type, note }: NoteNameProps) => {
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
     } = useEdit(note, note.name, "name");

    return (
        <h3
            className={type == NoteView.OPENED ? "font-semibold text-2xl cursor-text flex-grow" : "font-semibold text-lg leading-5 sm:leading-7"}
        >
            {isEditing ? (
                <input
                    className="bg-transparent outline-none"
                    ref={inputRef as RefObject<HTMLInputElement>}
                    value={text}
                    onChange={handleTextChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />
            ) : (
                <div onClick={handleDivClick}>{text}</div>
            )}
        </h3>
    )
}

export default NoteName;