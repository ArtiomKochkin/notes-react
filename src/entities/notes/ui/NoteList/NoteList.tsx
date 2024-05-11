import { NotesView } from "@/shared/const";
import ClosedNote from "../ClosedNote/ClosedNote";
import { useContext } from "react";
import { SidebarContext } from "@/shared/lib/context";

interface NoteListProps {
    view: NotesView,
}

const NoteList = ({ view }: NoteListProps ) => {
    const { showSidebar } = useContext(SidebarContext);
 
    return (
        <div className={`grid gap-2 sm:gap-4 ${view == NotesView.LIST ? "mx-auto grid-cols-1" : `grid-cols-2 ${showSidebar ? "lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"}`}`}>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            { view }
        </div>
    )
}

export default NoteList;