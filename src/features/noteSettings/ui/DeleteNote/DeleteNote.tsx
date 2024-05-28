import { useDeleteNoteMutation, useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface DeleteNoteProps {
    note: INote
}

const DeleteNote = ({ note }: DeleteNoteProps) => {
    const { updateNote: updNote, deleteNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNoteFinally] = useDeleteNoteMutation();
 
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