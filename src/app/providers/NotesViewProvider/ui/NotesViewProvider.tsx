import { ReactNode, useState } from "react";
import { LOCAL_STORAGE_NOTES_VIEW_KEY, NotesView } from "@/shared/const";
import { NotesViewContext } from "@/shared/lib/context";

interface NotesViewProviderProps {
    children: ReactNode
}

const defaultView = (localStorage.getItem(LOCAL_STORAGE_NOTES_VIEW_KEY) as NotesView) || NotesView.GRID;

export const NotesViewProvider = ({ children }: NotesViewProviderProps) => {
    const [notesView, setNotesView] = useState<NotesView>(defaultView);

    return (
        <NotesViewContext.Provider value={{ notesView, setNotesView }}>
            {children}
        </NotesViewContext.Provider>
    )
}