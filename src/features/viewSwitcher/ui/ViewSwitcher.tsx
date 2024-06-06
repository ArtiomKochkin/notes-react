import { LOCAL_STORAGE_NOTES_VIEW_KEY, NotesView } from "@/shared/const";
import { NotesViewContext } from "@/shared/lib/context";
import { useContext } from "react";
import { MdGridView, MdOutlineViewAgenda } from "react-icons/md";

const ViewSwitcher = () => {
    const { notesView, setNotesView } = useContext(NotesViewContext);

    const handleViewSwitcher = () => {
        if (setNotesView) {
            const newView = (notesView == NotesView.GRID) ? NotesView.LIST : NotesView.GRID;
            
            setNotesView(newView);
            localStorage.setItem(LOCAL_STORAGE_NOTES_VIEW_KEY, newView);
        }
    }

    return (
        <button onClick={handleViewSwitcher}>
            {notesView == NotesView.GRID 
                ? <MdGridView title="Сетка"/> 
                : <MdOutlineViewAgenda title="Список"/>
            }
        </button>
    )
}

export default ViewSwitcher;