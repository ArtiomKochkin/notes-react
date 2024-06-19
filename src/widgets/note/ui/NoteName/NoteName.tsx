import { useUpdNoteMutation } from "@/entities/notes";
import { NoteView } from "@/shared/const";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import React from "react";
import { RefObject } from "react";

interface NoteNameProps {
    type: NoteView,
    note: INote
}

export const NoteName = React.memo(({ type, note }: NoteNameProps) => {
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
     } = useEdit(note, note.name, "name", updateNote, 
        async (patch) => {
            const result = await updNote({
                ...patch,
                timestamp: Date.now()
            }).unwrap();
            return result;
        }
    );

    return (
        <h3 
            className={type == NoteView.OPENED 
                ? "font-semibold text-2xl cursor-text flex-grow h-full" 
                : "font-semibold text-lg leading-5 sm:leading-7 text-ellipsis whitespace-nowrap overflow-hidden"
            }
        >
            {isEditing ? (
                <input
                    className="bg-transparent outline-none w-full"
                    ref={inputRef as RefObject<HTMLInputElement>}
                    value={text}
                    onChange={handleTextChange}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />
            ) : (
                <div onClick={handleDivClick} className="w-full h-full">{text}</div>
            )}
        </h3>
    )
})