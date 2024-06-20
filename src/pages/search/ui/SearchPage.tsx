import { MainLayout } from "@/app/layouts";
import { NotesViewContext, SearchContext } from "@/shared/lib/context";
import { useSearchNotesQuery } from "@/entities/notes";
import { Title } from "@/shared/ui";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

export const SearchPage = () => {
    const { notesView } = useContext(NotesViewContext);
    const { searchTerm } = useContext(SearchContext);
    const { data, isLoading, isError } = useSearchNotesQuery();
    const filteredData = data?.filter(note => note.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <MainLayout>
            <Title>Результаты по запросу: {searchTerm}</Title>
            {!filteredData || filteredData.length === 0 || searchTerm === ""
                ? <div className="text-center">Ничего не найдено</div>
                : <NoteList view={notesView!} isLoading={isLoading} isError={isError} data={filteredData!} isSpecialList/>
            }
        </MainLayout>
    )
}