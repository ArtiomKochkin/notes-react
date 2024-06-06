import { INoteData } from "../types";

export enum NotesView {
    GRID = "grid",
    LIST = "list"
}

export enum NoteView {
    OPENED = "opened",
    CLOSED = "closed"
}

export const NOTES_SETTINGS = ["Удалить заметку", "Архивировать", "Создать копию", "Редактировать ярлыки", "Изменить фон"];

export const defaultValueNote: INoteData = {
    name: "Заголовок...",
    content: "Текст...",
    isArchive: false,
    isPinned: false,
    isDeleted: false,
    lastModifiedDate: new Date(),
    background: "",
    labels: []
};