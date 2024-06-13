import { useState, useRef, useEffect } from "react";
import { autoResizeTextarea, createOrderedList } from "../utils";

type FieldT =  HTMLInputElement | HTMLTextAreaElement;

export const useEdit = <
    T extends { id: string | number },
    U extends Partial<T>
> (
    entity: T, 
    initialText: string, 
    nameField: keyof T,
    updateAction: (updatedEntity: T) => void,
    updateMutation: (patch: U) => Promise<T>
) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(initialText);
    const inputRef = useRef<FieldT>(null);

    useEffect(() => {
        if (!isEditing && text !== initialText) {
            const updateField = async (): Promise<void> => {
                try {
                    const updatedEntity = await updateMutation({
                        id: entity.id,
                        [nameField]: text,
                    } as U);
                    updateAction(updatedEntity);
                } catch (err) {
                    console.log(`Failed to update entity with value ${text}: `, err);
                }
            };

            updateField();
        } else if (isEditing) {
            autoResizeTextarea(inputRef.current as HTMLTextAreaElement);
        }
    }, [isEditing]);

    const handleDivClick = () =>  setIsEditing(true);
    const handleInputBlur = () => setIsEditing(false);

    const handleTextChange = (e: React.FormEvent<FieldT>) => {
        setText(e.currentTarget.value);
        if (e.currentTarget.tagName === "TEXTAREA") {
            autoResizeTextarea(e.currentTarget as HTMLTextAreaElement);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<FieldT>) => {
        if (e.key === "Enter" && e.currentTarget.tagName === "INPUT") {
            setIsEditing(false);
        }
        createOrderedList(e as React.KeyboardEvent<HTMLTextAreaElement>);
    };

    return { 
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
    }
}