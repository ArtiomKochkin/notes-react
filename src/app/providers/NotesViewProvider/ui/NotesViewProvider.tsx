import { NotesView } from "@/shared/const";
import { NotesViewContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface NotesViewProviderProps {
    children: ReactNode
}

const NotesViewProvider = ({ children }: NotesViewProviderProps) => {
    const [notesView, setNotesView] = useState<NotesView>(NotesView.GRID);

    return (
        <NotesViewContext.Provider value={{ notesView, setNotesView }}>
            {children}
        </NotesViewContext.Provider>
    )
}

export default NotesViewProvider;