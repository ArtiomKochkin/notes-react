import { NunitoSans } from "@/shared/assets";
import { INote } from "@/shared/types";
import { NoteSettingsItem } from "@/shared/ui";
import jsPDF from "jspdf";

interface DownloadNotePDFProps {
    note: INote
}

const DownloadNotePDF = ({ note }: DownloadNotePDFProps) => {

    const handleClick = () => {
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
        <NoteSettingsItem onClick={handleClick}>
            Скачать заметку в PDF
        </NoteSettingsItem>
    )
}

export default DownloadNotePDF;