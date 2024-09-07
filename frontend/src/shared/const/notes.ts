import { INote } from "../types";

export enum NotesView {
    GRID = "grid",
    LIST = "list"
}

export enum NoteView {
    OPENED = "opened",
    CLOSED = "closed"
}

export const defaultValueNote: INote = {
    id: Date.now(),
    name: "Заметка",
    content: "",
    isArchive: false,
    isPinned: false,
    isDeleted: false,
    isList: false,
    timestamp: Date.now(),
    backgroundImage: "",
    background: "inherit",
    colorText: "inherit",
    labels: [],
    listContent: [{
        id: Date.now(),
        isChecked: false,
        text: "Текст...",
    }]
}