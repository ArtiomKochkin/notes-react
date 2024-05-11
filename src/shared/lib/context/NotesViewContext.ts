import { NotesView } from "@/shared/const";
import { createContext } from "react";

export interface NotesViewContextProps {
    notesView: NotesView,
    setNotesView: (notesView: NotesView) => void
}

export const NotesViewContext = createContext<NotesViewContextProps>({
    notesView: NotesView.LIST,
    setNotesView: () => {}
});