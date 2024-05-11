import { OpenedNote } from "@/entities/notes";
import NoteList from "@/entities/notes/ui/NoteList/NoteList";
import { CreateNoteButton } from "@/features/createNoteButton";
import { SidebarContext } from "@/shared/lib/context/SidebarContext";
import { useContext } from "react";

const MainPage = () => {
    const { showSidebar } = useContext(SidebarContext);

    return (
        <main className={`mt-10 sm:mt-14 p-4 ${showSidebar ? "hidden sm:block sm:ml-[33%] lg:ml-[20%]" : "ml-12 sm:ml-14 lg:ml-20"}`}>
            <CreateNoteButton />
            <NoteList view="list"/>
            <OpenedNote />
        </main>
    )
}

export default MainPage;