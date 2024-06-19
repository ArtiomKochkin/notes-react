import { useCreateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote, INoteData } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import React from "react";

interface CopyNoteProps {
    note: INote
}

export const CopyNote = React.memo(({ note }: CopyNoteProps) => {
    const { addNote } = useActions();
    const [createNote] = useCreateNoteMutation();

    const copyNote = async () => {
        try {
            const newNote = { ...note } as Partial<INote>;
            delete newNote.id;
            const createdNote = await createNote(newNote as INoteData).unwrap();
            addNote(createdNote);
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