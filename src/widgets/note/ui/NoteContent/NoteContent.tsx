import { useUpdNoteMutation } from "@/entities/notes";
import { NoteView, NotesView } from "@/shared/const";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";
import { formatText } from "../../lib";
import React from "react";

interface NoteContentPRops {
    type: NoteView,
    note: INote,
    view?: NotesView
}

export const NoteContent = React.memo(({ type, note, view }: NoteContentPRops) => {
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress,
    } = useEdit(note, note.content, "content", updateNote, 
        async (patch) => {
            const result = await updNote({
                ...patch,
                timestamp: Date.now()
            }).unwrap();
            return result;
        }
    );

    return (
        <div
            onClick={handleDivClick}
            className={
                type == NoteView.OPENED ? "my-2 flex flex-grow cursor-text" : `py-2 leading-5 h-full
                ${view == NotesView.GRID ? "line-clamp-6 sm:line-clamp-5 lg:line-clamp-4" : "line-clamp-4"}`
            }
        >
            {isEditing ? (
                <div className="w-full">
                    <textarea
                        className={`bg-transparent w-full min-h-full resize-none outline-none`}
                        ref={inputRef as RefObject<HTMLTextAreaElement>}
                        value={text}
                        onChange={handleTextChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleKeyPress}
                        autoFocus
                    ></textarea>
                </div>
            ) : (
                <div className="whitespace-pre-wrap w-full break-words" title="Введите текст...">
                    {formatText(text)}
                </div>
            )}
        </div>
    )
})