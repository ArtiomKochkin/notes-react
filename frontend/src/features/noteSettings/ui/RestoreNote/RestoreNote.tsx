import React from "react";
import { useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface RestoreNoteProps {
    note: INote
}

export const RestoreNote = React.memo(({ note }: RestoreNoteProps) => {
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();
 
    const restoreNote = async () => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                isDeleted: false
            }).unwrap();
            updateNote(updatedNote);
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
})