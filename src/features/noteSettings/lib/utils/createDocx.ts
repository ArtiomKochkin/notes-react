import { Document, Paragraph, TextRun } from 'docx';

export const createDocx = (name: string, content: string[]) => {
    const doc = new Document({
        sections: [{
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: name,
                            bold: true,
                            size: 40,
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "\n",
                        }),
                    ],
                }),
                ...content.map(line => new Paragraph({
                    children: [
                        new TextRun({
                            text: line,
                            size: 28,
                        }),
                    ],
                }))
            ],
        }],
    });

    return doc;
};