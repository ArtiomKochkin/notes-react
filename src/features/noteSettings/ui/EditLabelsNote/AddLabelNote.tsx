import { useCreateLabelMutation } from "@/entities/labels";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

interface AddLabelNoteProps {
    note: INote
}

const AddLabelNote = ({ note }: AddLabelNoteProps) => {
    const [createLabel] = useCreateLabelMutation();
    const [updateNote] = useUpdateNoteMutation();
    const { addLabel, updateNote: updLabel } = useActions();
    const [text, setText] = useState("");

    const handleAddLabel = async () => {
        try {
            const newLabel = await createLabel({ 
                name: text,
                notes: [note.id]
            }).unwrap();
            const updatedNote = await updateNote({
                id: note.id,
                labels: [...note.labels, newLabel]
            }).unwrap();
            addLabel(newLabel);
            updLabel(updatedNote);
        } catch (err) {
            console.error('Failed to create label:', err);
        }
        setText("");
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddLabel();
        }
    };

    return (
        <div className="flex-center p-1">
            <input 
                autoFocus
                className="bg-transparent outline-none"                 
                placeholder="Новый ярлык..."
                value={text}
                onKeyDown={handleKeyPress}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                onClick={handleAddLabel} 
                className="outline-none"
                title="Создать ярлык"
            >
                <FaRegPlusSquare className="text-lg"/>
            </button>
        </div>
    )
}

export default AddLabelNote;