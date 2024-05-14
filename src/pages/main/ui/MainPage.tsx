import { OpenedNote } from "@/entities/notes";
import { CreateNoteButton } from "@/features/createNoteButton";
import { Theme } from "@/shared/const";
import { SidebarContext, NotesViewContext } from "@/shared/lib/context";
import { useTheme } from "@/shared/lib/hooks";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

const MainPage = () => {
    const { showSidebar } = useContext(SidebarContext);
    const { notesView } = useContext(NotesViewContext);
    const { theme } = useTheme();

    return (
        <main className={`mt-10 sm:mt-14 p-4 ${showSidebar ? "hidden sm:block sm:ml-[33%] lg:ml-[20%]" : "ml-12 sm:ml-14 lg:ml-20"} ${theme == Theme.LIGHT ? "bg-light" : "bg-dark"}`}>
            <CreateNoteButton />
            <NoteList view={notesView!}/>
            <OpenedNote />
        </main>
    )
}

export default MainPage;