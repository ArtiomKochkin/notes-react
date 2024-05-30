import { useDeleteLabelMutation } from "@/entities/labels";
import { useActions } from "@/shared/lib/hooks";
import { BsTrash } from "react-icons/bs";

interface RemoveLabelProps {
    id: number
}

const RemoveLabel = ({ id }: RemoveLabelProps) => {
    const { removeLabel } = useActions();
    const [deleteLabel] = useDeleteLabelMutation();

    const handleRemoveLabel = async () => {
        try {
            await deleteLabel(id).unwrap();
            removeLabel(id);
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