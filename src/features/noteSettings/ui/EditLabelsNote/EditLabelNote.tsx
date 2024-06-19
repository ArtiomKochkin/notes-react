import { Theme } from "@/shared/const";
import { ILabel, INote } from "@/shared/types";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { useUpdLabelMutation } from "@/entities/labels";
import { useUpdNoteMutation } from "@/entities/notes";
import { useState } from "react";
import React from "react";

interface EditLabelNoteProps {
    label: ILabel,
    note: INote
}

export const EditLabelNote = React.memo(({ label, note }: EditLabelNoteProps) => {
    const { theme } = useTheme();
    const [isChecked, setIsChecked] = useState(note.labels.find(l => l === label.id) ? true : false);
    const {updateNote, updateLabel} = useActions();
    const [updLabel] = useUpdLabelMutation();
    const [updNote] = useUpdNoteMutation();

    const handleEditLabels = async (label: ILabel) => {

        try {
            let updatedLabel: ILabel, updatedNotes: INote;
            
            if (isChecked) {
                updatedLabel = await updLabel({
                    id: label.id,
                    notes: label.notes.filter(n => n !== note.id)
                }).unwrap();
                updatedNotes = await updNote({
                    id: note.id,
                    labels: note.labels.filter(l => l !== label.id),
                    timestamp: Date.now()
                }).unwrap();
                setIsChecked(false);
            } else {
                updatedLabel = await updLabel({
                    id: label.id,
                    notes: [...label.notes, note.id]
                }).unwrap();
                updatedNotes = await updNote({
                    id: note.id,
                    labels: [...note.labels, label.id],
                    timestamp: Date.now()
                }).unwrap();
                setIsChecked(true);
            }
            updateNote(updatedNotes);
            updateLabel(updatedLabel);
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