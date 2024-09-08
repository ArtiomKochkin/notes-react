import React from "react";
import { useUpdateLabelMutation, useGetLabelsQuery } from "@/entities/labels";
import { useDeleteNoteMutation } from "@/entities/notes";
import { INote } from "@/shared/types";
import { Button } from "@/shared/ui";

interface DeleteAllNotesProps {
    notes: INote[]
}

export const DeleteAllNotes = React.memo(({ notes }: DeleteAllNotesProps) => {
    const { data } = useGetLabelsQuery(null);
    const [deleteNote] = useDeleteNoteMutation();
    const [updateLabel] = useUpdateLabelMutation();

    const deleteNotes = async () => {
        try {
            for (const note of notes) {
                const filteredLabels = data?.filter(label => label.notes.includes(note.id));
                await deleteNote(note.id).unwrap();

                if (filteredLabels) {
                    for (const label of filteredLabels) {
                        await updateLabel({
                            id: label.id,
                            notes: label.notes.filter(n => n !== note.id)
                        }).unwrap();
                    }
                }
            }
        } catch (err) {
            console.error('Failed to delete notes:', err);
        }
    };

    return (
        <Button onClick={deleteNotes} createButton>
            Очистить корзину
        </Button>
    )
})