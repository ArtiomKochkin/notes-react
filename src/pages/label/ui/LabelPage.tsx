import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainLayout } from "@/app/layouts";
import { NoteList } from "@/widgets/noteList";
import { PinnedList } from "@/widgets/pinnedList";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { Title } from "@/shared/ui";

export const LabelPage = () => {
    const location = useLocation();
    const label = location.state || {};
    const { notesView } = useContext(NotesViewContext);
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const filteredNotes = data?.filter(item => item.labels.includes(label.id) && !item.isDeleted && !item.isArchive) || [];
    const pinnedNotes = filteredNotes.filter(item => item.isPinned);
    const otherNotes = filteredNotes.filter(item => !item.isPinned);

    return (
        <MainLayout>
            <Title>{label.name}</Title>
            {filteredNotes?.length === 0 && <Title>Для ярлыка нет заметок</Title>}
            <PinnedList view={notesView!} isLoading={isLoading} isError={isError} data={pinnedNotes}/>
            <NoteList 
                view={notesView!} 
                isLoading={isLoading} 
                isError={isError} 
                data={otherNotes}
                isSpecialList={pinnedNotes.length > 0 ? false : true} 
            />
        </MainLayout>
    )
}