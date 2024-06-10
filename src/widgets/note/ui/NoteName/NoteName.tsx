import { useUpdateNoteMutation } from "@/entities/notes";
import { NoteView } from "@/shared/const";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";

interface NoteNameProps {
    type: NoteView,
    note: INote
}

const NoteName = ({ type, note }: NoteNameProps) => {
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
     } = useEdit(note, note.name, "name", updNote, 
        async (patch) => {
            const result = await updateNote({
                ...patch,
                lastModifiedDate: new Date()
            }).unwrap();
            return result;
        }
    );

    return (
        <h3 className={type == NoteView.OPENED 
                ? "font-semibold text-2xl cursor-text flex-grow" 
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
                <div onClick={handleDivClick}>{text}</div>
            )}
        </h3>
    )
}

export default NoteName;