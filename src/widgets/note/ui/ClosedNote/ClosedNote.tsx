import { NoteView, NotesView } from "@/shared/const";
import { useOutside } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettings } from "../NoteSettings/NoteSettings";
import { NoteContent } from "../NoteContent/NoteContent";
import { NoteLabelList } from "../NoteLabelList/NoteLabelList";
import { NoteContentList } from "../NoteContentList/NoteContentList";
import React from "react";
import { NoteHeader } from "../NoteHeader/NoteHeader";

interface NoteProps {
    view: NotesView,
    note: INote,
    toggleNote: () => void
    isOpen: boolean
}

export const ClosedNote = React.memo(({ isOpen, view, note, toggleNote }: NoteProps) => {
    const { ref: settingsRef, isShow, setIsShow } = useOutside<HTMLDivElement>(false);
  
    return (
        <div
            className={`
                flex flex-col custom-border cursor-pointer p-2 sm:p-3 relative transition-all 
                sm:hover:shadow-custom bg-no-repeat bg-center bg-cover bg-inherit text-inherit
                ${view == NotesView.GRID ? "h-[42vh] md:h-[40vh] lg:h-[35vh]" : "h-[34vh] sm:h-[38vh] lg:h-fit lg:max-h-[38vh]"}
            `}
            style={{
                backgroundImage: `url(${note.backgroundImage})`,
                backgroundColor: `${note.background}`,
                color: `${note.colorText}`
            }}
        >
            <NoteHeader isOpen={isOpen} note={note} settingsRef={settingsRef} isShow={isShow} setIsShow={setIsShow} toggleNote={toggleNote}/>
            <NoteSettings isShow={isShow} note={note} refElement={settingsRef}/>
            <div onClick={toggleNote} className="flex-grow overflow-y-hidden">
                {note.isList 
                    ? <NoteContentList type={NoteView.OPENED} note={note}/> 
                    : <NoteContent type={NoteView.OPENED} note={note}/>
                }
            </div>
            <NoteLabelList labels={note.labels} type={NoteView.CLOSED} />
        </div>
    )
})