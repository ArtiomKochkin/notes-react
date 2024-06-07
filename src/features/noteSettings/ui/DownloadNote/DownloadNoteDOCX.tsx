import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { createDocx } from "../../lib";

interface DownloadNoteDOCXProps {
    note: INote
}

const DownloadNoteDOCX = ({ note }: DownloadNoteDOCXProps) => {

    const handleClick = async () => {
        const contentLines = note.content.split("\n");
        const doc = createDocx(note.name, contentLines);
        const blob = await Packer.toBlob(doc);
        
        saveAs(blob, `${note.name}.docx`);
    };

    return (
        <NoteSettingsItem onClick={handleClick}>
            Скачать заметку в Docx
        </NoteSettingsItem>
    )
}

export default DownloadNoteDOCX;