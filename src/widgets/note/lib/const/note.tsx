import { DeleteNote, RestoreNote, ArchiveNote, CopyNote, DownloadNotePDF, DownloadNoteDOCX, EditLabelsNote, StylizeNote } from "@/features/noteSettings";
import { INote } from "@/shared/types";

type NoteProps = { note: INote }
type NoteComponent = (props: NoteProps) => JSX.Element

export const NOTE_SETTINGS_COMPONENTS: NoteComponent[] = [
    DeleteNote,
    RestoreNote,
    ArchiveNote,
    CopyNote,
    DownloadNotePDF,
    DownloadNoteDOCX,
    EditLabelsNote,
    StylizeNote
];