import { MainLayout } from "@/app/layouts";
import { NotesViewContext, SearchContext } from "@/shared/lib/context";
import { useSearchNotesQuery } from "@/entities/notes";
import { Title } from "@/shared/ui";
import { NoteList } from "@/widgets/noteList";
import { useContext } from "react";

const SearchPage = () => {
    const { notesView } = useContext(NotesViewContext);
    const { searchTerm } = useContext(SearchContext);
    const { data, isLoading, isError } = useSearchNotesQuery(searchTerm, { skip: !searchTerm });

    return (
        <MainLayout>
            <Title>Результаты по запросу: {searchTerm}</Title>
            {!data || data.length === 0
                ? <div className="text-center">Ничего не найдено</div>
                : <NoteList view={notesView!} isLoading={isLoading} isError={isError} data={data!} isSpecialList/>
            }
        </MainLayout>
    )
}

export default SearchPage;