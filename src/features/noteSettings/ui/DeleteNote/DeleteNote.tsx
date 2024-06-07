import { useGetLabelsQuery, useUpdateLabelMutation } from "@/entities/labels";
import { useDeleteNoteMutation, useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface DeleteNoteProps {
    note: INote
}

const DeleteNote = ({ note }: DeleteNoteProps) => {
    const { updateNote: updNote, deleteNote, updateLabel: updLabel } = useActions();
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNoteFinally] = useDeleteNoteMutation();
    const [updateLabel] = useUpdateLabelMutation();
    const { data } = useGetLabelsQuery(null);
    const filteredLabels = data?.filter(label => label.notes.includes(note.id));
 
    const handleDeleteNote = async () => {
        try {
            const updatedNote = await updateNote({
                id: note.id,
                isDeleted: true,
                isArchive: false
            }).unwrap();
            updNote(updatedNote);
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    };

    const handleDeleteNoteFinally = async () => {
        try {
            await deleteNoteFinally(note.id).unwrap();
            deleteNote(note.id);

            if (filteredLabels) {
                for (const label of filteredLabels) {
                    const updatedLabel = await updateLabel({
                        id: label.id,
                        notes: label.notes.filter(n => n !== note.id)
                    }).unwrap();
                    updLabel(updatedLabel);
                }
            }
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    };

    return (
        <>
            {note.isDeleted ? (
                <NoteSettingsItem onClick={handleDeleteNoteFinally}>Удалить из корзины</NoteSettingsItem>
            ) : (
                <NoteSettingsItem onClick={handleDeleteNote}>Удалить заметку</NoteSettingsItem>
            )}
        </>
    )
}

export default DeleteNote;