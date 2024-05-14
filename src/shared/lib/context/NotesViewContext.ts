import { NotesView } from "@/shared/const";
import { createContext } from "react";

export interface INotesViewContext {
    notesView?: NotesView,
    setNotesView?: (notesView: NotesView) => void
}

export const NotesViewContext = createContext<INotesViewContext>({});