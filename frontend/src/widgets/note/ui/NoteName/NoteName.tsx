import React, { RefObject } from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useEdit } from "@/shared/lib/hooks";
import { NoteView } from "@/shared/const";
import { INote } from "@/shared/types";

interface NoteNameProps {
    type: NoteView,
    note: INote
}

export const NoteName = React.memo(({ type, note }: NoteNameProps) => {
    const [updateNote] = useUpdateNoteMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
     } = useEdit(note, note.name, "name", 
        async (patch) => {
            const result = await updateNote({
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