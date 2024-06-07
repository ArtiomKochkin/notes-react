import { useUpdateNoteMutation } from "@/entities/notes";
import { useActions } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import { handleImage } from "../../lib";

interface ChangeBackgroundNoteProps {
    note: INote
}

const ChangeBackgroundNote = ({ note }: ChangeBackgroundNoteProps) => {
    const {updateNote: updNote} = useActions();
    const [updateNote] = useUpdateNoteMutation();

    const handler = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        
        input.onchange = (e: Event) => handleImage(e, note, input, "background", updNote, 
            async (patch) => {
                const result = await updateNote(patch).unwrap();
                return result;
            }
        );

        document.body.appendChild(input);
        input.click();
    }

    return (
        <NoteSettingsItem onClick={handler}>
            Изменить фон
        </NoteSettingsItem>
    )
}

export default ChangeBackgroundNote;