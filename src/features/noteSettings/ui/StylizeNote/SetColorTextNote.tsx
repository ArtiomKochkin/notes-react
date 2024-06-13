import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Theme } from "@/shared/const";
import SetColors from "./SetColors";

interface SetColorTextNoteProps {
    note: INote
}

const SetColorTextNote = ({ note }: SetColorTextNoteProps) => {
    const { theme } = useTheme();
    const {updateNote: updNote} = useActions();
    const [updateNote] = useUpdateNoteMutation();

    const changeColorText = async (color: string) => {
        try {
            const updatedNote = await updateNote({
                id: note.id,
                colorText: color,
            }).unwrap();
            updNote(updatedNote);
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
}

export default SetColorTextNote;