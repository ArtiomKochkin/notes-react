import { useDeleteLabelMutation } from "@/entities/labels";
import { useGetNotesQuery, useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { BsTrash } from "react-icons/bs";

interface RemoveLabelProps {
    id: number
}

const RemoveLabel = ({ id }: RemoveLabelProps) => {
    const { removeLabel, updateNote: updNote  } = useActions();
    const [deleteLabel] = useDeleteLabelMutation();
    const { data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(note => note.labels.includes(id));
    const [updateNote] = useUpdateNoteMutation();

    const handleRemoveLabel = async () => {
        try {
            await deleteLabel(id).unwrap();
            removeLabel(id);

            if (filteredNotes) {
                for (const note of filteredNotes!) {
                    const updatedNote = await updateNote({
                        id: note.id,
                        labels: note.labels.filter(l => l !== id)
                    }).unwrap();
                    updNote(updatedNote);
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
}

export default RemoveLabel;