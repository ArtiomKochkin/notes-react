import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { handleImage } from "../../lib";
import { Theme } from "@/shared/const";

interface SetCustomBgNoteProps {
    note: INote
}

const SetCustomBgNote = ({ note }: SetCustomBgNoteProps) => {
    const { theme } = useTheme();
    const {updateNote: updNote} = useActions();
    const [updateNote] = useUpdateNoteMutation();

    const changeBackground = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        
        input.onchange = (e: Event) => handleImage(e, note, input, "backgroundImage", updNote, 
            async (patch) => {
                const result = await updateNote({
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
}

export default SetCustomBgNote;