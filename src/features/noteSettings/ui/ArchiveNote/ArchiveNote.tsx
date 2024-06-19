import { useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import React from "react";

interface ArchiveNoteProps {
    note: INote
}

export const ArchiveNote = React.memo(({ note }: ArchiveNoteProps) => {
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const archiveNote = async () => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                isArchive: !note.isArchive, 
                isDeleted: note.isArchive ? note.isDeleted : false
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.error('Failed to archive note:', err);
        }
    };

    return (
        <>
            {!note.isDeleted && (
                <NoteSettingsItem onClick={archiveNote}>
                    {note.isArchive ? "Убрать из Архива" : "Архивировать"}
                </NoteSettingsItem>
            )}
        </>
    )
})