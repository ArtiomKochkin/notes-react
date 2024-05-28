import { MainLayout } from "@/app/layouts";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { filterNotes } from "@/shared/lib/utils";
import { NewNote } from "@/widgets/note";
import { NoteList } from "@/widgets/noteList";
import { PinnedList } from "@/widgets/pinnedList";
import { useContext } from "react";

const MainPage = () => {
    const { notesView } = useContext(NotesViewContext);
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const filtered = filterNotes(data!);
    const pinnedNotes = filtered.filter(item => item.isPinned);
    const otherNotes = filtered.filter(item => !item.isPinned);

    return (
        <MainLayout>
            <NewNote/>
            <PinnedList view={notesView!} isLoading={isLoading} isError={isError} data={pinnedNotes!}/>
            <NoteList view={notesView!} isLoading={isLoading} isError={isError} data={otherNotes!} isSpecialList={pinnedNotes.length > 0 ? false : true}/>
        </MainLayout>
    )
}

export default MainPage;