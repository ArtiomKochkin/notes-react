import { 
    ArchiveNote, CopyNote, DeleteNote, DownloadNoteDOCX, 
    DownloadNotePDF, EditLabelsNote, RestoreNote, StylizeNote
} from "@/features/noteSettings";
import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";

interface NoteSettingsProps {
    isShow: boolean,
    note: INote,
    refElement: RefObject<HTMLDivElement>,
}

const NoteSettings = ({ isShow, note, refElement }: NoteSettingsProps) => {
    const { theme } = useTheme();

    return (
        <>
            {isShow && 
                <div
                    ref={refElement}
                    className={
                        `absolute z-20 right-1 top-1 custom-border shadow-custom p-2 
                        ${theme == Theme.LIGHT ? "bg-light " : "bg-dark"}`
                    }
                >
                    <ul className="flex flex-col gap-1">
                        <DeleteNote note={note}/>
                        <RestoreNote note={note}/>
                        <ArchiveNote note={note}/>
                        <CopyNote note={note}/>
                        <DownloadNotePDF note={note}/>
                        <DownloadNoteDOCX note={note}/>
                        <EditLabelsNote note={note}/>
                        <StylizeNote note={note}/>
                    </ul>
                </div>
            }
        </>
    )
}

export default NoteSettings;