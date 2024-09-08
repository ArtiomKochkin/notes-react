import React from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Theme } from "@/shared/const";
import { SetColors } from "./SetColors";

interface SetColorTextNoteProps {
    note: INote
}

export const SetColorTextNote = React.memo(({ note }: SetColorTextNoteProps) => {
    const { theme } = useTheme();
    const [updateNote] = useUpdateNoteMutation();

    const changeColorText = async (color: string) => {
        try {
            await updateNote({
                id: note.id,
                colorText: color,
            }).unwrap();
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