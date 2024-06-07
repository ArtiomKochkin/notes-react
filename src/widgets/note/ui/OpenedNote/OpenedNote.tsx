import { LastModifiedDate } from "@/features/lastModifiedDate";
import { NoteView, Theme } from "@/shared/const";
import { useOutside, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Close, Dots } from "@/shared/ui";
import NoteSettings from "../NoteSettings/NoteSettings";
import NoteContent from "../NoteContent/NoteContent";
import NoteName from "../NoteName/NoteName";
import NoteLabelList from "../NoteLabelList/NoteLabelList";
import { PinNote } from "@/features/noteSettings";

interface OpenedNoteProps {
    note: INote,
    closeNote: () => void
}

const OpenedNote = ({ note, closeNote }: OpenedNoteProps) => {
    const { ref, isShow, setIsShow } = useOutside(false);
    const { theme } = useTheme();
 
    return (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-dark bg-opacity-70 overflow-auto">
            <div 
                className={`relative flex flex-col custom-border w-[94vw] sm:w-4/5 lg:w-3/5 min-h-[80vh] mx-auto my-[1vh] p-4 
                    ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}
                    bg-no-repeat bg-center bg-cover`}
                    style={{ backgroundImage: `url(${note.background})`}}
            >
                <div className="flex-center justify-between">
                    <NoteName note={note} type={NoteView.OPENED}/>
                    <div className="flex-center gap-1 cursor-pointer">
                        <PinNote note={note}/>
                        <Dots refElement={ref} show={isShow} setShow={setIsShow}/>
                        <Close closeElement={closeNote}/>
                    </div>
                </div>
                <NoteSettings isShow={isShow} note={note}/>
                <NoteContent type={NoteView.OPENED} note={note}/>
                <div className="mx-0 mb-0 mt-auto">
                    <NoteLabelList labels={note.labels} type={NoteView.OPENED}/>
                    <LastModifiedDate date={note.lastModifiedDate}/>
                </div>
            </div>
        </div>
    )
}

export default OpenedNote;