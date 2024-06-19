import { MainLayout } from "@/app/layouts";
import { useGetNotesQuery } from "@/entities/notes";
import { NotesViewContext } from "@/shared/lib/context";
import { filterNotes } from "@/shared/lib/utils";
import { NewNote } from "@/widgets/note";
import { NoteList } from "@/widgets/noteList";
import { PinnedList } from "@/widgets/pinnedList";
import React, { useContext, useMemo } from "react";

export const MainPage = React.memo(() => {
    const { notesView } = useContext(NotesViewContext);
    const { isLoading, isError, data } = useGetNotesQuery(null);
    const filtered = useMemo(() => filterNotes(data || []), [data]);
    const pinnedNotes = useMemo(() => filtered.filter(item => item.isPinned), [filtered]);
    const otherNotes = useMemo(() => filtered.filter(item => !item.isPinned), [filtered]);

    return (
        <MainLayout>
            <NewNote view={notesView!}/>
            <PinnedList view={notesView!} isLoading={isLoading} isError={isError} data={pinnedNotes!}/>
            <NoteList 
                view={notesView!} 
                isLoading={isLoading} 
                isError={isError} 
                data={otherNotes!} 
                isSpecialList={pinnedNotes.length > 0 ? false : true}
            />
        </MainLayout>
    )
})