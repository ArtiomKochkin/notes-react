import { NoteViewType } from "@/shared/types";
import ClosedNote from "../ClosedNote/ClosedNote";
import { SidebarContext } from "@/shared/lib/context/SidebarContext";
import { useContext } from "react";

interface NoteListProps {
    view: NoteViewType,
}

const NoteList = ({ view }: NoteListProps ) => {
    const { showSidebar } = useContext(SidebarContext);
 
    return (
        <div className={`grid gap-2 sm:gap-4 ${view == "list" ? "mx-auto grid-cols-1" : `grid-cols-2 ${showSidebar ? "lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"}`}`}>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            <ClosedNote view={view}/>
            { view }
        </div>
    )
}

export default NoteList;