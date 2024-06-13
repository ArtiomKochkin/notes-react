import { autoResizeTextarea } from "..";

export const createOrderedList = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.currentTarget.tagName === "TEXTAREA") {
        const textarea = e.currentTarget;
        const text = textarea.value;
        const start = textarea.selectionStart;
        const textBeforeCursor = text.slice(0, start);
        const textAfterCursor = text.slice(start);
        const linesBeforeCursor = textBeforeCursor.split('\n');
        const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1];
        const match = currentLine.match(/^(\d+)[)\. ] ?/);
        let nextNumber = 1;
    
        if (match) {
            nextNumber = parseInt(match[1], 10) + 1;
            const newLine = `\n${nextNumber}. `;
            const newText = textBeforeCursor + newLine + textAfterCursor;
            const newCursorPosition = start + newLine.length;
            
            textarea.value = newText;
            textarea.setSelectionRange(newCursorPosition, newCursorPosition);
            autoResizeTextarea(textarea);
            e.preventDefault();
        }
    }
};