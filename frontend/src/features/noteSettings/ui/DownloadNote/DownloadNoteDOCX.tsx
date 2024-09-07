import React from "react";
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import { createDocx } from "../../lib";

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
        <>
            {!(note.isArchive || note.isDeleted || note.isList) && (
                <NoteSettingsItem onClick={downloadNote}>
                    Скачать заметку в Docx
                </NoteSettingsItem>
            )}
        </>
    )
})