import { useUpdLabelMutation, useGetLabelsQuery } from "@/entities/labels";
import { useDeleteNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Button } from "@/shared/ui";
import React from "react";

interface DeleteAllNotesProps {
    notes: INote[]
}

export const DeleteAllNotes = React.memo(({ notes }: DeleteAllNotesProps) => {
    const { removeNote, updateLabel } = useActions();
    const { data } = useGetLabelsQuery(null);
    const [deleteNoteFinally] = useDeleteNoteMutation();
    const [updLabel] = useUpdLabelMutation();

    const deleteNotes = async () => {
        try {
            for (const note of notes) {
                const filteredLabels = data?.filter(label => label.notes.includes(note.id));
                await deleteNoteFinally(note.id).unwrap();
                removeNote(note.id);

                if (filteredLabels) {
                    for (const label of filteredLabels) {
                        const updatedLabel = await updLabel({
                            id: label.id,
                            notes: label.notes.filter(n => n !== note.id)
                        }).unwrap();
                        updateLabel(updatedLabel);
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