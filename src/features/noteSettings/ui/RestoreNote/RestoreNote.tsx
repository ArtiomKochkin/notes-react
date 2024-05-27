import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface RestoreNoteProps {
    note: INote
}

const RestoreNote = ({ note }: RestoreNoteProps) => {
    const { restoreFromDeleted } = useActions();
    const [updateNote] = useUpdateNoteMutation();
 
    const restoreNote = async () => {
        restoreFromDeleted(note.id);
        const updatedNote = {...note, isDeleted: false};
        await updateNote(updatedNote).unwrap();
    };

    return (
        <NoteSettingsItem onClick={restoreNote}>
            Восстановить заметку
        </NoteSettingsItem>
    )
}

export default RestoreNote;