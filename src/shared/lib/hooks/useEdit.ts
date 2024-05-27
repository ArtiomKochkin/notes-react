import { useState, useRef, useEffect } from "react";
import { INote } from "@/shared/types";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "./useActions";

type FieldT =  HTMLInputElement | HTMLTextAreaElement;

export const useEdit = (
    note: INote, 
    initialText: string, 
    nameField: string,
) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(initialText);
    const inputRef = useRef<FieldT>(null);
    const { updateNote: updNote } = useActions();
    const [updateNote] = useUpdateNoteMutation();

    useEffect(() => {
        if (!isEditing && text !== initialText) {
            const updateField = async (): Promise<void> => {
                try {
                    const newNote = await updateNote({
                        id: note.id,
                        [nameField]: text,
                    }).unwrap();
                    updNote(newNote);
                } catch (err) {
                    console.log(`Failed to update the note with value ${text}: `, err);
                }
            };

            updateField();
        }
    }, [isEditing]);

    const handleDivClick = () => setIsEditing(true);

    const handleInputBlur = () => {
        setIsEditing(false);
    } 

    const handleTextChange = (e: React.ChangeEvent<FieldT>) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<FieldT>) => {
        if (e.key === "Enter" && e.currentTarget.tagName === "INPUT") {
            setIsEditing(false);
        }
    };

    return { 
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
    }
}