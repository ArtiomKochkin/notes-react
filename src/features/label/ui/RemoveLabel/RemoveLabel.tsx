import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteLabelMutation } from "@/entities/labels";
import { useGetNotesQuery, useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";

interface RemoveLabelProps {
    id: number
}

export const RemoveLabel = React.memo(({ id }: RemoveLabelProps) => {
    const { removeLabel, updateNote } = useActions();
    const [deleteLabel] = useDeleteLabelMutation();
    const { data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(note => note.labels.includes(id));
    const [updNote] = useUpdNoteMutation();

    const handleRemoveLabel = async () => {
        try {
            await deleteLabel(id).unwrap();
            removeLabel(id);

            if (filteredNotes) {
                for (const note of filteredNotes!) {
                    const updatedNote = await updNote({
                        id: note.id,
                        labels: note.labels.filter(l => l !== id)
                    }).unwrap();
                    updateNote(updatedNote);
                }
            }
        } catch (err) {
            console.error('Failed to delete label:', err);
        }
    };

    return (
        <div onClick={handleRemoveLabel}>
            <BsTrash />
        </div>
    )
})