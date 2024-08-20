import React from "react";
import { TiPin } from "react-icons/ti";
import { useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";

interface PinNoteProps {
    note: INote
}

export const PinNote = React.memo(({ note }: PinNoteProps) => {
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const handlePinNote = async () => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                isPinned: !note.isPinned
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.error('Failed to pin/unpin note:', err);
        }
    };

    return (
        <>
            {!(note.isArchive || note.isDeleted) && (
                <div 
                    onClick={handlePinNote} 
                    title={note.isPinned ? "Открепить" : "Закрепить"}
                >
                    <TiPin />
                </div>
            )}
        </>
    )
})