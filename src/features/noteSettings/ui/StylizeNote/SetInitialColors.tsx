import React from "react";
import { useUpdNoteMutation } from "@/entities/notes";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Theme } from "@/shared/const";

interface SetInitialColorsProps {
    note: INote
}

export const SetInitialColors = React.memo(({ note }: SetInitialColorsProps) => {
    const { theme } = useTheme();
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const changeColors = async () => {
        try {
            const updatedNote = await updNote({
                id: note.id,
                colorText: "inherit",
                background: "inherit",
                backgroundImage: ""
            }).unwrap();
            updateNote(updatedNote);
        } catch (err) {
            console.log(`Failed to update note: `, err);
        }
    };
 
    return (
        <div
            onClick={changeColors}
            className={`py-1 px-2 text-sm rounded-md cursor-pointer transition-colors 
                ${theme == Theme.LIGHT ? "hover:bg-blue hover:text-light" : "hover:text-blue"
            }`}
        >
            Сбросить стилизацию
        </div>
    )
})