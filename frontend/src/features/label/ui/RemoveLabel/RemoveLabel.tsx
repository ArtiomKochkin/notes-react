import React from "react";
import { BsTrash } from "react-icons/bs";
import { useDeleteLabelMutation } from "@/entities/labels";
import { useGetNotesQuery, useUpdateNoteMutation } from "@/entities/notes";

interface RemoveLabelProps {
    id: number
}

export const RemoveLabel = React.memo(({ id }: RemoveLabelProps) => {
    const [deleteLabel] = useDeleteLabelMutation();
    const { data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(note => note.labels.includes(id));
    const [updateNote] = useUpdateNoteMutation();

    const handleRemoveLabel = async () => {
        try {
            await deleteLabel(id).unwrap();

            if (filteredNotes) {
                for (const note of filteredNotes!) {
                    await updateNote({
                        id: note.id,
                        labels: note.labels.filter(l => l !== id)
                    }).unwrap();
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