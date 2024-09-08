import React from "react";
import { useGetLabelsQuery, useUpdateLabelMutation } from "@/entities/labels";
import { useDeleteNoteMutation, useUpdateNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface DeleteNoteProps {
    note: INote
}

export const DeleteNote = React.memo(({ note }: DeleteNoteProps) => {
    const [updateNote] = useUpdateNoteMutation();
    const [deleteNote] = useDeleteNoteMutation();
    const [updateLabel] = useUpdateLabelMutation();
    const { data } = useGetLabelsQuery(null);
    const filteredLabels = data?.filter(label => label.notes.includes(note.id));
 
    const handleDeleteNote = async () => {
        try {
            await updateNote({
                id: note.id,
                isDeleted: true,
                isArchive: false
            }).unwrap();
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    };

    const handleDeleteNoteFinally = async () => {
        try {
            await deleteNote(note.id).unwrap();

            if (filteredLabels) {
                for (const label of filteredLabels) {
                    await updateLabel({
                        id: label.id,
                        notes: label.notes.filter(n => n !== note.id)
                    }).unwrap();
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
                <NoteSettingsItem onClick={handleDeleteNote}>Удалить</NoteSettingsItem>
            )}
        </>
    )
})