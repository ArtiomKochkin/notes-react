import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { TiPin } from "react-icons/ti";

interface PinNoteProps {
    note: INote
}

const PinNote = ({ note }: PinNoteProps) => {
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();

    const handlePinNote = async () => {
        try {
            const updatedNote = await updateNote({
                id: note.id,
                isPinned: !note.isPinned
            }).unwrap();
            updNote(updatedNote);
        } catch (err) {
            console.error('Failed to pin/unpin note:', err);
        }
    };

    return (
        <>
            {!(note.isArchive || note.isDeleted) && (
                <div onClick={handlePinNote}>
                    <TiPin />
                </div>
            )}
        </>
    )
}

export default PinNote;