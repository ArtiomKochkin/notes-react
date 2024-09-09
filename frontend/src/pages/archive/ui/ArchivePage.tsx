import { useContext, useEffect } from "react";
import { MainLayout } from "@/app/layouts";
import { NoteList } from "@/widgets/noteList";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { Title } from "@/shared/ui";

export const ArchivePage = () => {
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const { notesView } = useContext(NotesViewContext);
    const filteredNotes = data?.filter(item => item.isArchive) || [];

    useEffect(() => {
        document.title = "Архив | Notes";
    }, []);
    
    return (
        <MainLayout>
            {filteredNotes!.length > 0
                ? <Title>Архив</Title>
                : <Title>В архиве нет заметок</Title>
            }
           <NoteList isSpecialList view={notesView!} isLoading={isLoading} isError={isError} data={filteredNotes!}/>
        </MainLayout>
    )
}