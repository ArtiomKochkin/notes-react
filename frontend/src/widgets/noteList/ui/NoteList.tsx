import React, { useContext } from "react";
import { Note } from "@/widgets/note";
import { NotesView } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { INote } from "@/shared/types";
import { Error, Loading, Title } from "@/shared/ui";

interface NoteListProps {
    view: NotesView,
    data: INote[],
    isLoading?: boolean,
    isError?: boolean,
    isSpecialList?: boolean
}

export const NoteList = React.memo(({ view, data, isLoading, isError, isSpecialList }: NoteListProps ) => {
    const { showSidebar } = useContext(SidebarContext);

    return (
        <div>
            {!isSpecialList && data.length !== 0 && <Title>Другое</Title>}
            <Loading isLoading={isLoading}>Загрузка заметок...</Loading>
            <Error isError={isError}/>
            <ul 
                className={`
                    grid gap-2 sm:gap-4 
                    ${view == NotesView.LIST ? "mx-auto grid-cols-1" : `grid-cols-2 
                    ${showSidebar ? "lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4"}`}
                `}
            >
                {data?.map(note => <Note note={note} view={view} key={note.id}/>)}
            </ul>
        </div>
    )
})