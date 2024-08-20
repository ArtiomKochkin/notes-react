import React from "react";
import { NoteView, NotesView } from "@/shared/const";
import { INote } from "@/shared/types";
import { NoteContentListItem } from "./NoteContentListItem";

interface NoteContentListProps {
    type: NoteView,
    note: INote,
    view?: NotesView
}

export const NoteContentList = React.memo(({  type, note, view }: NoteContentListProps) => {
 
    return (
        <div
            className={
                type == NoteView.OPENED ? "my-2 flex flex-grow cursor-text" : `py-2 leading-5 h-full 
                ${view == NotesView.GRID ? "line-clamp-6 sm:line-clamp-5 lg:line-clamp-4" : "line-clamp-4"}`
            }
        >
            <div className="whitespace-pre-wrap w-full" title="Введите текст...">
                {note.listContent.map((line, i) => (
                    <NoteContentListItem key={i} line={line} note={note}/>
                ))}
            </div>
        </div>
    )
})