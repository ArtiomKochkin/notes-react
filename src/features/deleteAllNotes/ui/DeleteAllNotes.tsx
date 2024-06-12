import { useUpdateLabelMutation, useGetLabelsQuery } from "@/entities/labels";
import { useDeleteNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Button } from "@/shared/ui";

interface DeleteAllNotesProps {
    notes: INote[]
}

const DeleteAllNotes = ({ notes }: DeleteAllNotesProps) => {
    const { deleteNote, updateLabel: updLabel } = useActions();
    const { data } = useGetLabelsQuery(null);
    const [deleteNoteFinally] = useDeleteNoteMutation();
    const [updateLabel] = useUpdateLabelMutation();

    const deleteNotes = async () => {
        try {
            for (const note of notes) {
                const filteredLabels = data?.filter(label => label.notes.includes(note.id));
                await deleteNoteFinally(note.id).unwrap();
                deleteNote(note.id);

                if (filteredLabels) {
                    for (const label of filteredLabels) {
                        const updatedLabel = await updateLabel({
                            id: label.id,
                            notes: label.notes.filter(n => n !== note.id)
                        }).unwrap();
                        updLabel(updatedLabel);
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
}

export default DeleteAllNotes;