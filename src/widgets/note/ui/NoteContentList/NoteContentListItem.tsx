import { useCallback, useState } from "react";
import { IListContent, INote } from "@/shared/types";
import { DivEditable } from "@/shared/ui";
import { useActions } from "@/shared/lib/hooks";
import { useUpdNoteMutation } from "@/entities/notes";
import React from "react";

interface NoteContentListItem {
    line: IListContent,
    note: INote,
}

export const NoteContentListItem = React.memo(({ line, note }: NoteContentListItem) => {
    const [isChecked, setIsChecked] = useState(line.isChecked);
    const [content, setContent] = useState(line.text);
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const handleChangeListContent = useCallback(async ( newContent: string, checkbox: boolean) => {
        try {
            const updatedListContent = note.listContent.map(item => 
                item.id === line.id ? { ...item, text: newContent, isChecked: checkbox } : item
            );
            const updatedNote = await updNote({
                id: note.id,
                timestamp: Date.now(),
                listContent: updatedListContent
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.error("Failed to update note:", err);
        }
    }, [note, line.id, updNote, updateNote]);

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
                const updatedNote = await updNote({
                    id: note.id,
                    timestamp: Date.now(),
                    listContent: [...note.listContent, {
                        id: Date.now(),
                        isChecked: false,
                        text: "",
                    }]
                }).unwrap();
                updateNote(updatedNote);
            } catch (err) {
                console.error("Failed to update note:", err);
            }
        } else if (e.key === "Backspace" && e.currentTarget.innerText === "") {
            try {
                const updatedNote = await updNote({
                    id: note.id,
                    timestamp: Date.now(),
                    listContent: note.listContent.filter(l => l.id !== line.id)
                }).unwrap();
                updateNote(updatedNote);
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