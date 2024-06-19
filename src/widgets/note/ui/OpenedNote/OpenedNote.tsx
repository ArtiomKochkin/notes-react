import { LastModifiedDate } from "@/features/lastModifiedDate";
import { NoteView, Theme } from "@/shared/const";
import { useOutside, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettings } from "../NoteSettings/NoteSettings";
import { NoteContent } from "../NoteContent/NoteContent";
import { NoteLabelList } from "../NoteLabelList/NoteLabelList";
import { useEffect } from "react";
import { NoteContentList } from "../NoteContentList/NoteContentList";
import React from "react";
import { NoteHeader } from "../NoteHeader/NoteHeader";

interface OpenedNoteProps {
    note: INote,
    closeNote: () => void,
    isOpen: boolean
}

export const OpenedNote = React.memo(({ isOpen, note, closeNote }: OpenedNoteProps) => {
    const { ref: settingsRef, isShow, setIsShow } = useOutside<HTMLDivElement>(false);
    const { theme } = useTheme();

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {document.body.style.overflowY = "auto"};
    }, []);
    
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-dark bg-opacity-70">
            <div className={`
                relative custom-border w-[94vw] sm:w-4/5 lg:w-3/5 h-[95vh] mx-auto my-[1vh] scrollbar
                ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}
            `}>
                <div 
                    className={`h-full flex flex-col p-4 bg-no-repeat bg-center bg-cover text-inherit`}
                    style={{
                        backgroundImage: `url(${note.backgroundImage})`,
                        backgroundColor: `${note.background}`,
                        color: `${note.colorText}`
                    }}
                >
                    <NoteHeader isOpen={isOpen} note={note} settingsRef={settingsRef} isShow={isShow} setIsShow={setIsShow} closeNote={closeNote}/>
                    <NoteSettings isShow={isShow} note={note} refElement={settingsRef}/>
                    {note.isList 
                        ? <NoteContentList type={NoteView.OPENED} note={note}/> 
                        : <NoteContent type={NoteView.OPENED} note={note}/>
                    }
                    <NoteLabelList labels={note.labels} type={NoteView.OPENED}/>
                    <LastModifiedDate date={note.timestamp}/>
                </div>
            </div>
        </div>
    )
})