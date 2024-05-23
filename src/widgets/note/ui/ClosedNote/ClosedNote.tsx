import { NoteView, NotesView, Theme } from "@/shared/const";
import { useOutside, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Dots } from "@/shared/ui";
import { useState } from "react";
import { TiPin } from "react-icons/ti";
import OpenedNote from "../OpenedNote/OpenedNote";
import NoteSettings from "../NoteSettings/NoteSettings";
import NoteContent from "../NoteContent/NoteContent";
import NoteName from "../NoteName/NoteName";
import NoteLabelList from "../NoteLabelList/NoteLabelList";
import { closeNote } from "../../lib";

interface NoteProps {
    view: NotesView,
    note: INote
}

const ClosedNote = ({ view, note }: NoteProps) => {
    const { ref: settingsRef, isShow: isShowSettings, setIsShow: setIsShowSettings } = useOutside(false);
    const [isOpenNote, setIsOpenNote] = useState(false);
    const { theme } = useTheme();
 
    const toggleNote = () => {
        setIsOpenNote(() => !isOpenNote);
    };

    return (
        <>
            <div
                className={`flex flex-col custom-border cursor-pointer p-2 sm:p-4 relative transition-all lg:hover:shadow-custom ${view == NotesView.GRID ? "h-[42vh] md:h-[40vh] lg:h-[35vh]" : "h-[34vh] sm:h-[38vh] lg:h-fit lg:max-h-[38vh]"} ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}`}
            >
                <div className="flex-center justify-between">
                    <div onClick={toggleNote} className="flex-grow">
                        <NoteName note={note} type={NoteView.CLOSED} />
                    </div>
                    <div className="hidden sm:flex sm:flex-center gap-1">
                        <TiPin />
                        <Dots refElement={settingsRef} show={isShowSettings} setShow={setIsShowSettings}/>
                    </div>
                </div>
                <div onClick={toggleNote}>
                    <NoteSettings isShow={isShowSettings}/>
                    <NoteContent note={note} type={NoteView.CLOSED} />
                    <NoteLabelList labels={note.labels} type={NoteView.CLOSED} />
                </div>
            </div>
            {isOpenNote && <OpenedNote note={note} closeNote={() => closeNote(isOpenNote, setIsOpenNote)}/>}
        </>
    )
}

export default ClosedNote;