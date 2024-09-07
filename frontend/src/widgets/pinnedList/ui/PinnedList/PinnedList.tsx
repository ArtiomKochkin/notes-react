import React from "react";
import { NoteList } from "@/widgets/noteList";
import { NotesView } from "@/shared/const";
import { INote } from "@/shared/types";
import { Title } from "@/shared/ui";

interface PinnedListProps {
    view: NotesView,
    data: INote[],
    isLoading?: boolean,
    isError?: boolean,
}

export const PinnedList = React.memo(({ view, data, isLoading, isError }: PinnedListProps) => {

    return (
        <div>
            {data.length > 0 && (
                <>
                    <Title>Закрепленные</Title>
                    <NoteList isSpecialList view={view!} isLoading={isLoading} isError={isError} data={data!}/>
                </>
            )}
        </div>
    )
})