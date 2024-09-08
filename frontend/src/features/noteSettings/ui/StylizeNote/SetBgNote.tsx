import React from "react";
import { useUpdateNoteMutation } from "@/entities/notes";
import { useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Theme } from "@/shared/const";
import { SetColors } from "./SetColors";

interface SetBgNoteProps {
    note: INote
}

export const SetBgNote = React.memo(({ note }: SetBgNoteProps) => {
    const { theme } = useTheme();
    const [updateNote] = useUpdateNoteMutation();

    const changeBackground = async (color: string) => {
        try {
            await updateNote({
                id: note.id,
                background: color,
                backgroundImage: ""
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
            <span>Установить фон</span>
            <SetColors setColor={changeBackground}/>
        </div>
    )
})