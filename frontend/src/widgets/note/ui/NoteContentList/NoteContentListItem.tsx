import React, { useCallback, useState } from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { IListContent, INote } from "@/shared/types";
import { DivEditable } from "@/shared/ui";

interface NoteContentListItem {
    line: IListContent,
    note: INote,
}

export const NoteContentListItem = React.memo(({ line, note }: NoteContentListItem) => {
    const [isChecked, setIsChecked] = useState(line.isChecked);
    const [content, setContent] = useState(line.text);
    const [updateNote] = useUpdateNoteMutation();

    const handleChangeListContent = useCallback(async ( newContent: string, checkbox: boolean) => {
        try {
            const updatedListContent = note.listContent.map(item => 
                item.id === line.id ? { ...item, text: newContent, isChecked: checkbox } : item
            );
            await updateNote({
                id: note.id,
                timestamp: Date.now(),
                listContent: updatedListContent
            }).unwrap();
        } catch (err) {
            console.error("Failed to update note:", err);
        }
    }, [note, line.id, updateNote]);

    const handleChangeText = (newText: string) => {
        setContent(newText);
        handleChangeListContent(newText, isChecked);
    };

    const handleChangeCheckbox = (value: boolean) => {
        setIsChecked(value);
        handleChangeListContent(content, value);
    };

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            try {
                await updateNote({
                    id: note.id,
                    timestamp: Date.now(),
                    listContent: [...note.listContent, {
                        id: Date.now(),
                        isChecked: false,
                        text: "",
                    }]
                }).unwrap();
            } catch (err) {
                console.error("Failed to update note:", err);
            }
        } else if (e.key === "Backspace" && e.currentTarget.innerText === "") {
            try {
                await updateNote({
                    id: note.id,
                    timestamp: Date.now(),
                    listContent: note.listContent.filter(l => l.id !== line.id)
                }).unwrap();
            } catch (err) {
                console.error("Failed to update note:", err);
            }
        }
    };

    return (
        <div className="flex-center gap-2" >
            <input
                className="cursor-pointer"
                type="checkbox" 
                checked={isChecked} 
                onChange={() => handleChangeCheckbox(!isChecked)}
            />
            <DivEditable 
                className={`${isChecked ? "line-through" : ""} w-[95%] h-full outline-none`}
                html={line.text}
                onChange={handleChangeText}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
})