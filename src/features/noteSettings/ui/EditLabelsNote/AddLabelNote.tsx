import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useCreateLabelMutation } from "@/entities/labels";
import { useUpdNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { handleEnterPress } from "@/shared/lib/utils";
import { INote } from "@/shared/types";

interface AddLabelNoteProps {
    note: INote
}

export const AddLabelNote = React.memo(({ note }: AddLabelNoteProps) => {
    const [createLabel] = useCreateLabelMutation();
    const [updNote] = useUpdNoteMutation();
    const { addLabel, updateNote } = useActions();
    const [text, setText] = useState("");

    const handleAddLabel = async () => {
        if (text) {
            try {
                const newLabel = await createLabel({ 
                    name: text,
                    notes: [note.id],
                    timestamp: Date.now()
                }).unwrap();
                const updatedNote = await updNote({
                    id: note.id,
                    labels: [...note.labels, newLabel.id],
                    timestamp: Date.now()
                }).unwrap();
                addLabel(newLabel);
                updateNote(updatedNote);
            } catch (err) {
                console.error('Failed to create label:', err);
            }
        }
        setText("");
    };

    return (
        <div className="flex-center p-1 gap-1">
            <input 
                autoFocus
                className="bg-transparent outline-none w-[90%]"                 
                placeholder="Новый ярлык..."
                value={text}
                onKeyDown={e => handleEnterPress(e, handleAddLabel)}
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
})