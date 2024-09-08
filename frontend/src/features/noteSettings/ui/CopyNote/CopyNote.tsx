import React from "react";
import { useCreateNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface CopyNoteProps {
    note: INote
}

export const CopyNote = React.memo(({ note }: CopyNoteProps) => {
    const [createNote] = useCreateNoteMutation();

    const copyNote = async () => {
        try {
            const newNote = { ...note };
            newNote.id = Date.now();
            await createNote(newNote).unwrap();
        } catch (err) {
            console.error('Failed to copy note:', err);
        }
    };
 
    return (
        <>
            {(!note.isDeleted && !note.isArchive) && (
                <NoteSettingsItem onClick={copyNote}>
                    Создать копию
                </NoteSettingsItem>
            )}
        </>
    )
})