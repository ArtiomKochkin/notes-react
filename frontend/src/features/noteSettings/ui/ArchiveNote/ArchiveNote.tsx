import React from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";

interface ArchiveNoteProps {
    note: INote
}

export const ArchiveNote = React.memo(({ note }: ArchiveNoteProps) => {
    const [updateNote] = useUpdateNoteMutation();

    const archiveNote = async () => {
        try {
            await updateNote({
                id: note.id,
                isArchive: !note.isArchive, 
                isDeleted: note.isArchive ? note.isDeleted : false
            }).unwrap();
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