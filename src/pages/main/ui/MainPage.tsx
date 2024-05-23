import { Theme } from "@/shared/const";
import { SidebarContext, NotesViewContext } from "@/shared/lib/context";
import { useTheme } from "@/shared/lib/hooks";
import { NewNote } from "@/widgets/note";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

const MainPage = () => {
    const { showSidebar } = useContext(SidebarContext);
    const { notesView } = useContext(NotesViewContext);
    const { theme } = useTheme();

    return (
        <main className={`mt-10 sm:mt-14 p-4 ${showSidebar ? "hidden sm:block sm:ml-[33%] lg:ml-[20%]" : "ml-12 sm:ml-14 lg:ml-20"} ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}`}>
            <NewNote/>
            <NoteList view={notesView!}/>
        </main>
    )
}

export default MainPage;