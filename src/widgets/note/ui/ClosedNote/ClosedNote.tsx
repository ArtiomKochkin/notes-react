import { NoteView, NotesView } from "@/shared/const";
import { useOutside } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Dots } from "@/shared/ui";
import NoteSettings from "../NoteSettings/NoteSettings";
import NoteContent from "../NoteContent/NoteContent";
import NoteName from "../NoteName/NoteName";
import { PinNote } from "@/features/noteSettings";
import NoteLabelList from "../NoteLabelList/NoteLabelList";

interface NoteProps {
    view: NotesView,
    note: INote,
    toggleNote: () => void
}

const ClosedNote = ({ view, note, toggleNote }: NoteProps) => {
    const { ref: settingsRef, isShow, setIsShow } = useOutside<HTMLDivElement>(false);

    return (
        <div
            className={
                `flex flex-col custom-border cursor-pointer p-2 sm:p-3 relative transition-all sm:hover:shadow-custom bg-no-repeat bg-center bg-cover bg-inherit text-inherit
                ${view == NotesView.GRID ? "h-[42vh] md:h-[40vh] lg:h-[35vh]" : "h-[34vh] sm:h-[38vh] lg:h-fit lg:max-h-[38vh]"} `
            }
            style={{
                backgroundImage: `url(${note.backgroundImage})`,
                backgroundColor: `${note.background}`,
                color: `${note.colorText}`
            }}
        >
            <div className="flex-center justify-between flex-shrink-0">
                <div onClick={toggleNote} className="w-full sm:w-[80%]">
                    <NoteName note={note} type={NoteView.CLOSED} />
                </div>
                <div className="hidden sm:flex sm:flex-center gap-1">
                    <PinNote note={note}/>
                    <Dots refElement={settingsRef} show={isShow} setShow={setIsShow}/>
                </div>
            </div>
            <NoteSettings isShow={isShow} note={note} refElement={settingsRef}/>
            <div onClick={toggleNote} className="flex-grow">
                <NoteContent note={note} type={NoteView.CLOSED} view={view}/>
            </div>
            <NoteLabelList labels={note.labels} type={NoteView.CLOSED} />
        </div>
    )
}

export default ClosedNote;