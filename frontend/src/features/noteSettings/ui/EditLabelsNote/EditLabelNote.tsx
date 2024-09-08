import React, { useState } from "react";
import { useUpdateLabelMutation } from "@/entities/labels";
import { useUpdateNoteMutation } from "@/entities/notes";
import { ILabel, INote } from "@/shared/types";
import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

interface EditLabelNoteProps {
    label: ILabel,
    note: INote
}

export const EditLabelNote = React.memo(({ label, note }: EditLabelNoteProps) => {
    const { theme } = useTheme();
    const [isChecked, setIsChecked] = useState(note.labels.find(l => l === label.id) ? true : false);
    const [updateLabel] = useUpdateLabelMutation();
    const [updateNote] = useUpdateNoteMutation();

    const handleEditLabels = async (label: ILabel) => {

        try {            
            if (isChecked) {
                await updateLabel({
                    id: label.id,
                    notes: label.notes.filter(n => n !== note.id)
                }).unwrap();
                await updateNote({
                    id: note.id,
                    labels: note.labels.filter(l => l !== label.id),
                    timestamp: Date.now()
                }).unwrap();
                setIsChecked(false);
            } else {
                await updateLabel({
                    id: label.id,
                    notes: [...label.notes, note.id]
                }).unwrap();
                await updateNote({
                    id: note.id,
                    labels: [...note.labels, label.id],
                    timestamp: Date.now()
                }).unwrap();
                setIsChecked(true);
            }
        } catch (err) {
            console.error('Failed to edit labels:', err);
        }
    };
 
    return (
        <li>
            <label 
                className={`py-1 px-2 text-sm rounded-md cursor-pointer flex-center justify-between gap-2 transition-colors 
                    ${theme == Theme.LIGHT ? "hover:bg-blue hover:text-light" : "hover:text-blue"
                }`}
            >
                <input 
                    type="checkbox"
                    onChange={() => handleEditLabels(label)}
                    checked={isChecked}
                />
                <span>{label.name}</span>
            </label>
        </li>
    )
})