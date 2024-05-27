import { useDeleteNoteMutation, useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface DeleteNoteProps {
    note: INote
}

const DeleteNote = ({ note }: DeleteNoteProps) => {
    const { moveToDeleted, deleteNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNoteFinally] = useDeleteNoteMutation();
 
    const handleDeleteNote = async () => {
        try {
            moveToDeleted(note.id);
            const updatedNote = {...note, isDeleted: true, isArchive: false};
            await updateNote(updatedNote).unwrap();
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    };

    const handleDeleteNoteFinally = async () => {
        try {
            deleteNote(note.id);
            await deleteNoteFinally(note.id).unwrap();
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