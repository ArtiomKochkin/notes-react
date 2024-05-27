import { MainLayout } from "@/app/layouts";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { Title } from "@/shared/ui";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

const ArchivePage = () => {
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const { notesView } = useContext(NotesViewContext);
    const filteredNotes = data?.filter(item => item.isArchive);

    console.log(data);
    return (
        <MainLayout>
            {filteredNotes!.length > 0
                ? <Title>Архив</Title>
                : <Title>В архивe нет заметок</Title>
            }
           <NoteList view={notesView!} isLoading={isLoading} isError={isError} data={filteredNotes!}/>
        </MainLayout>
    )
}

export default ArchivePage;