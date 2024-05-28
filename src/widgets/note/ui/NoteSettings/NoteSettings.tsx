import { ArchiveNote, CopyNote, DeleteNote, RestoreNote } from "@/features/noteSettings";
import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";

interface NoteSettingsProps {
    isShow: boolean,
    note: INote
}

const NoteSettings = ({ isShow, note }: NoteSettingsProps) => {
    const { theme } = useTheme();

    return (
        <>
            {isShow && <div className={`absolute z-20 right-1 top-1 custom-border shadow-custom p-2 ${theme == Theme.LIGHT ? "bg-light " : "bg-dark"}`}>
                <ul className="flex flex-col gap-1">
                    <DeleteNote note={note}/>
                    <RestoreNote note={note}/>
                    <ArchiveNote note={note}/>
                    <CopyNote note={note}/>
                </ul>
            </div>}
        </>
    )
}

export default NoteSettings;