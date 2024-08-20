import React from "react";
import { useGetLabelsQuery, useUpdLabelMutation } from "@/entities/labels";
import { useDeleteNoteMutation, useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface DeleteNoteProps {
    note: INote
}

export const DeleteNote = React.memo(({ note }: DeleteNoteProps) => {
    const { updateNote, removeNote, updateLabel } = useActions();
    const [updNote] = useUpdNoteMutation();
    const [deleteNoteFinally] = useDeleteNoteMutation();
    const [updLabel] = useUpdLabelMutation();
    const { data } = useGetLabelsQuery(null);
    const filteredLabels = data?.filter(label => label.notes.includes(note.id));
 
    const handleDeleteNote = async () => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                isDeleted: true,
                isArchive: false
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.error('Failed to delete note:', err);
        }
    };

    const handleDeleteNoteFinally = async () => {
        try {
            await deleteNoteFinally(note.id).unwrap();
            removeNote(note.id);

            if (filteredLabels) {
                for (const label of filteredLabels) {
                    const updatedLabel = await updLabel({
                        id: label.id,
                        notes: label.notes.filter(n => n !== note.id)
                    }).unwrap();
                    updateLabel(updatedLabel);
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