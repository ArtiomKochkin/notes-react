import React from "react";
import { TiPin } from "react-icons/ti";
import { useUpdateNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";

interface PinNoteProps {
    note: INote
}

export const PinNote = React.memo(({ note }: PinNoteProps) => {
    const [updateNote] = useUpdateNoteMutation();

    const handlePinNote = async () => {
        try {
            await updateNote({
                id: note.id,
                isPinned: !note.isPinned
            }).unwrap();
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