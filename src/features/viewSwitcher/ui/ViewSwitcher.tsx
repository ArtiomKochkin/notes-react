import React, { useContext, useCallback } from "react";
import { MdGridView, MdOutlineViewAgenda } from "react-icons/md";
import { LOCAL_STORAGE_NOTES_VIEW_KEY, NotesView } from "@/shared/const";
import { NotesViewContext } from "@/shared/lib/context";

export const ViewSwitcher = React.memo(() => {
    const { notesView, setNotesView } = useContext(NotesViewContext);

    const handleViewSwitcher = useCallback(() => {
        if (setNotesView) {
            const newView = (notesView == NotesView.GRID) ? NotesView.LIST : NotesView.GRID;
            
            setNotesView(newView);
            localStorage.setItem(LOCAL_STORAGE_NOTES_VIEW_KEY, newView);
        }
    }, [notesView, setNotesView]);

    return (
        <button onClick={handleViewSwitcher}>
            {notesView == NotesView.GRID 
                ? <MdGridView title="Сетка"/> 
                : <MdOutlineViewAgenda title="Список"/>
            }
        </button>
    )
})