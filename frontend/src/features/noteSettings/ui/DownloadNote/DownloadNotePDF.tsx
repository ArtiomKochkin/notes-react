import React from "react";
import jsPDF from "jspdf";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import { NunitoSans } from "@/shared/assets";

interface DownloadNotePDFProps {
    note: INote
}

export const DownloadNotePDF = React.memo(({ note }: DownloadNotePDFProps) => {

    const downloadNote = () => {
        const doc = new jsPDF();
        doc.addFileToVFS('Nunito-Sans.ttf', NunitoSans.replace('data:font/ttf;base64,', ''));
        doc.addFont('Nunito-Sans.ttf', 'NunitoSans', 'normal');
        doc.setFont('NunitoSans');

        doc.setFontSize(20);
        doc.text(note.name, 10, 10);
        doc.setFontSize(12);
        doc.text(note.content, 10, 20);
        doc.save(`${note.name}.pdf`);
    };
 
    return (
        <>
            {!(note.isArchive || note.isDeleted || note.isList) && (
                <NoteSettingsItem onClick={downloadNote}>
                    Скачать заметку в PDF
                </NoteSettingsItem>
            )}
        </>
    )
})