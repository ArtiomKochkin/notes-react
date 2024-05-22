import { useGetNotesQuery } from "@/entities/notes";
import { NotesView } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { Error, Loading } from "@/shared/ui";
import { ClosedNote } from "@/widgets/note";
import { useContext } from "react";

interface NoteListProps {
    view: NotesView,
}

const NoteList = ({ view }: NoteListProps ) => {
    const { showSidebar } = useContext(SidebarContext);
    const { isLoading, isError, data } = useGetNotesQuery(null);
 
    return (
        <div>
            <Loading isLoading={isLoading}>Загрузка заметок...</Loading>
            <Error isError={isError}/>
            <ul className={`grid gap-2 sm:gap-4 ${view == NotesView.LIST ? "mx-auto grid-cols-1" : `grid-cols-2 ${showSidebar ? "lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"}`}`}>
                {data?.map(note => <ClosedNote note={note} view={view} key={note.id}/>)}
            </ul>
        </div>
    )
}

export default NoteList;