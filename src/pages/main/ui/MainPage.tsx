import { MainLayout } from "@/app/layouts";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { useTypedSelector } from "@/shared/lib/hooks";
import { NewNote } from "@/widgets/note";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

const MainPage = () => {
    const { notesView } = useContext(NotesViewContext);
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(item => !item.isArchive && !item.isDeleted);
    const notes = useTypedSelector(state => state.notes);
    console.log(notes);
    return (
        <MainLayout>
            <NewNote/>
            <NoteList view={notesView!} isLoading={isLoading} isError={isError} data={filteredNotes!}/>
        </MainLayout>
    )
}

export default MainPage;