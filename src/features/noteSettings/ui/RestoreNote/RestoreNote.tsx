import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface RestoreNoteProps {
    note: INote
}

const RestoreNote = ({ note }: RestoreNoteProps) => {
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();
 
    const restoreNote = async () => {
        try {
            const updatedNote = await updateNote({
                id: note.id,
                isDeleted: false
            }).unwrap();
            updNote(updatedNote);
        } catch (err) {
            console.error('Failed to restore note:', err);
        }
    };

    return (
        <>
            {note.isDeleted && (
                <NoteSettingsItem onClick={restoreNote}>
                    Восстановить заметку
                </NoteSettingsItem>
            )}
        </>
    )
}

export default RestoreNote;