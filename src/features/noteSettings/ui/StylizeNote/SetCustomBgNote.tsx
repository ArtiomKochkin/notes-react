import { useUpdNoteMutation } from "@/entities/notes";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { handleImage } from "../../lib";
import { Theme } from "@/shared/const";
import React from "react";

interface SetCustomBgNoteProps {
    note: INote
}

export const SetCustomBgNote = React.memo(({ note }: SetCustomBgNoteProps) => {
    const { theme } = useTheme();
    const { updateNote } = useActions();
    const [updNote] = useUpdNoteMutation();

    const changeBackground = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        
        input.onchange = (e: Event) => handleImage(e, note, input, "backgroundImage", updateNote, 
            async (patch) => {
                const result = await updNote({
                    ...patch,
                    timestamp: Date.now()
                }).unwrap();
                return result;
            }
        );

        document.body.appendChild(input);
        input.click();
    }

    return (
        <div 
            className={`py-1 px-2 text-sm rounded-md cursor-pointer flex-center justify-between gap-2 transition-colors 
                ${theme == Theme.LIGHT ? "hover:bg-blue hover:text-light" : "hover:text-blue"
            }`}
            onClick={changeBackground}
        >
            Установить свой фон
        </div>
    )
})