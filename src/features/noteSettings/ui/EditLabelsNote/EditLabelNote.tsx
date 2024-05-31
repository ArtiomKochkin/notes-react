import { Theme } from "@/shared/const";
import { ILabel, INote } from "@/shared/types";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { useUpdateLabelMutation } from "@/entities/labels";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useState } from "react";

interface EditLabelNoteProps {
    label: ILabel,
    note: INote
}

const EditLabelNote = ({ label, note }: EditLabelNoteProps) => {
    const { theme } = useTheme();
    const [isChecked, setIsChecked] = useState(note.labels.find(l => l.id === label.id) ? true : false);
    const {updateNote: updNote, updateLabel: updLabel} = useActions();
    const [updateLabel] = useUpdateLabelMutation();
    const [updateNote] = useUpdateNoteMutation();

    const handleEditLabels = async (label: ILabel) => {

        try {
            let updatedLabel: ILabel, updatedNotes: INote;
            if (isChecked) {
                updatedLabel = await updateLabel({
                    id: label.id,
                    notes: label.notes.filter(n => n !== note.id)
                }).unwrap();
                updatedNotes = await updateNote({
                    id: note.id,
                    labels: note.labels.filter(l => l.id !== label.id)
                }).unwrap();
                setIsChecked(false);
            } else {
                updatedLabel = await updateLabel({
                    id: label.id,
                    notes: [...label.notes, note.id]
                }).unwrap();
                updatedNotes = await updateNote({
                    id: note.id,
                    labels: [...note.labels, label]
                }).unwrap();
                setIsChecked(true);
            }

            updNote(updatedNotes);
            updLabel(updatedLabel);
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
}

export default EditLabelNote;