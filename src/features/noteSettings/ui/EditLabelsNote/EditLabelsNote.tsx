import React from "react";
import { useGetLabelsQuery } from "@/entities/labels";
import { useOutside } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Error, Loading, NoteSettingsItem, NoteSubSettings } from "@/shared/ui";
import { EditLabelListNote } from "./EditLabelListNote";
import { AddLabelNote } from "./AddLabelNote";

interface EditLabelsNoteProps {
    note: INote
}

export const EditLabelsNote = React.memo(({ note }: EditLabelsNoteProps) => {
    const { data, isLoading, isError} = useGetLabelsQuery(null);
    const { ref: editRef, isShow, setIsShow } = useOutside<HTMLLIElement>(false);

    return (
        <>
            {(!note.isDeleted && !note.isArchive) && (
                <>
                    <NoteSettingsItem innerRef={editRef}>
                        <span onClick={() => setIsShow(!isShow)}>Редактировать ярлыки</span>
                        {isShow && (
                            <NoteSubSettings>
                                <Loading isLoading={isLoading}>Загрузка ярлыков...</Loading>
                                <Error isError={isError}/>
                                <AddLabelNote note={note}/>
                                <EditLabelListNote labels={data!} note={note}/>
                            </NoteSubSettings>
                        )}
                    </NoteSettingsItem>
                </>
            )}
        </>
    )
})