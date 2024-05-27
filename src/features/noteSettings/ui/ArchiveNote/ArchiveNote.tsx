import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface ArchiveNoteProps {
    note: INote
}

const ArchiveNote = ({ note }: ArchiveNoteProps) => {
    const { moveToArchive } = useActions();
    const [updateNote] = useUpdateNoteMutation();
 
    const archiveNote = async () => {
        try {
            moveToArchive(note.id);
            const updatedNote = { ...note, isArchive: !note.isArchive, isDeleted: note.isArchive ? note.isDeleted : false };
            await updateNote(updatedNote).unwrap();
        } catch (err) {
            console.error('Failed to archive note:', err);
        }
    };

    return (
        <NoteSettingsItem onClick={archiveNote}>
            {note.isArchive ? "Убрать из Архива" : "Архивировать"}
        </NoteSettingsItem>
    )
}

export default ArchiveNote;