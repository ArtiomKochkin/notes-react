export const createOrderedList = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.currentTarget.tagName === "TEXTAREA") {
        const textarea = e.currentTarget;
        const text = textarea.value;
        const start = textarea.selectionStart;

        const beforeCursor = text.slice(0, start);
        const afterCursor = text.slice(start);
        const linesBeforeCursor = beforeCursor.split('\n');
        const currentLine = linesBeforeCursor[linesBeforeCursor.length - 1];
        
        const match = currentLine.match(/^(\d+)[\. ] ?/);
        let nextNumber = 1;
    
        if (match) {
            nextNumber = parseInt(match[1], 10) + 1;
            const newLine = `\n${nextNumber}. `;

            const newText = beforeCursor + newLine + afterCursor;
            textarea.value = newText;

            const newCursorPosition = start + newLine.length;
            textarea.selectionStart = textarea.selectionEnd = newCursorPosition;

            e.preventDefault();
        }
    }
};