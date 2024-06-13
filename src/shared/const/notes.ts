import { INoteData } from "../types";

export enum NotesView {
    GRID = "grid",
    LIST = "list"
}

export enum NoteView {
    OPENED = "opened",
    CLOSED = "closed"
}

export const defaultValueNote: INoteData = {
    name: "Заголовок...",
    content: "Текст...",
    isArchive: false,
    isPinned: false,
    isDeleted: false,
    timestamp: Date.now(),
    backgroundImage: "",
    background: "inherit",
    colorText: "inherit",
    labels: []
};