import { useUpdNoteMutation } from "@/entities/notes";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Theme } from "@/shared/const";
import { SetColors } from "./SetColors";
import React from "react";

interface SetColorTextNoteProps {
    note: INote
}

export const SetColorTextNote = React.memo(({ note }: SetColorTextNoteProps) => {
    const { theme } = useTheme();
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const changeColorText = async (color: string) => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                colorText: color,
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.log(`Failed to update note: `, err);
        }
    };
 
    return (
        <div 
            className={`py-1 px-2 text-sm rounded-md cursor-pointer transition-colors 
                ${theme == Theme.LIGHT ? "hover:bg-blue hover:text-light" : "hover:text-blue"
            }`}
        >
            <span>Установить цвет текста</span>
            <SetColors setColor={changeColorText}/>
        </div>
    )
})