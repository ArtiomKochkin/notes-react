import { useGetLabelsQuery } from "@/entities/labels";
import { Theme } from "@/shared/const";
import { useHover, useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { Error, Loading, NoteSettingsItem } from "@/shared/ui";
import { useRef } from "react";
import EditLabelListNote from "./EditLabelListNote";
import AddLabelNote from "./AddLabelNote";

interface EditLabelsNoteProps {
    note: INote
}

const EditLabelsNote = ({ note }: EditLabelsNoteProps) => {
    const editRef = useRef<HTMLLIElement>(null);
    const { data, isLoading, isError} = useGetLabelsQuery(null);
    const isHovered = useHover({element: editRef});
    const { theme } = useTheme();

    return (
        <>
            {(!note.isDeleted && !note.isArchive) && (
                <>
                    <NoteSettingsItem innerRef={editRef}>
                        <span>Редактировать ярлыки</span>
                        {isHovered && (
                            <div 
                                className={`min-w-[50%] absolute z-30 right-1 bottom-1 custom-border shadow-custom p-2
                                    ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"
                                }`}
                            >
                                <Loading isLoading={isLoading}>Загрузка ярлыков...</Loading>
                                <Error isError={isError}/>
                                <AddLabelNote note={note}/>
                                <EditLabelListNote labels={data!} note={note}/>
                            </div>
                        )}
                    </NoteSettingsItem>
                </>
            )}
        </>
    )
}

export default EditLabelsNote;