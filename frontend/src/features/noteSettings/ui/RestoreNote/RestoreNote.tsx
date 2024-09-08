import React from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface RestoreNoteProps {
    note: INote
}

export const RestoreNote = React.memo(({ note }: RestoreNoteProps) => {
    const [updateNote] = useUpdateNoteMutation();
 
    const restoreNote = async () => {
        try {
            await updateNote({
                id: note.id,
                isDeleted: false
            }).unwrap();
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