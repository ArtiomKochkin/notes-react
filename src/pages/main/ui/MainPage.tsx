import { NoteList, OpenedNote } from "@/entities/notes";
import { CreateNoteButton } from "@/features/createNoteButton";
import { SidebarContext, NotesViewContext } from "@/shared/lib/context";
import { useContext } from "react";

const MainPage = () => {
    const { showSidebar } = useContext(SidebarContext);
    const { notesView } = useContext(NotesViewContext);

    return (
        <main className={`mt-10 sm:mt-14 p-4 ${showSidebar ? "hidden sm:block sm:ml-[33%] lg:ml-[20%]" : "ml-12 sm:ml-14 lg:ml-20"}`}>
            <CreateNoteButton />
            <NoteList view={notesView}/>
            <OpenedNote />
        </main>
    )
}

export default MainPage;