import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { createDocx } from "../../lib";
import React from "react";

interface DownloadNoteDOCXProps {
    note: INote
}

export const DownloadNoteDOCX = React.memo(({ note }: DownloadNoteDOCXProps) => {

    const downloadNote = async () => {
        const contentLines = note.content.split("\n");
        const doc = createDocx(note.name, contentLines);
        const blob = await Packer.toBlob(doc);
        
        saveAs(blob, `${note.name}.docx`);
    };

    return (
        <NoteSettingsItem onClick={downloadNote}>
            Скачать заметку в Docx
        </NoteSettingsItem>
    )
})