import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface ArchiveNoteProps {
    note: INote
}

const ArchiveNote = ({ note }: ArchiveNoteProps) => {
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();

    const archiveNote = async () => {
        try {
            const updatedNote = await updateNote({
                id: note.id,
                isArchive: !note.isArchive, 
                isDeleted: note.isArchive ? note.isDeleted : false 
            }).unwrap();
            updNote(updatedNote);
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