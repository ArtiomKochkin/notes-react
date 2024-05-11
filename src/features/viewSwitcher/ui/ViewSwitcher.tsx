import { NotesView } from "@/shared/const";
import { NotesViewContext } from "@/shared/lib/context";
import { useContext } from "react";
import {  MdGridView, MdOutlineViewAgenda } from "react-icons/md";

const ViewSwitcher = () => {
    const { notesView, setNotesView } = useContext(NotesViewContext);

    const handleViewSwitcher = () => {
        (notesView == NotesView.GRID) ? setNotesView(NotesView.LIST) : setNotesView(NotesView.GRID);
    }

    return (
        <button onClick={handleViewSwitcher}>
            {notesView == NotesView.GRID ? <MdGridView/> : <MdOutlineViewAgenda/>}
        </button>
    )
}

export default ViewSwitcher;