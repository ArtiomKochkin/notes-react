import { ILabel, INote } from "@/shared/types";
import { EditLabelNote } from "./EditLabelNote";
import React from "react";

interface EditLabelListNoteProps {
    labels: ILabel[],
    note: INote
}

export const EditLabelListNote = React.memo(({ labels, note }: EditLabelListNoteProps) => {
 
    return (
        <ul className="flex flex-col gap-1">
            {labels?.map(label => 
                <EditLabelNote key={label.id} label={label} note={note}/>
            )}
        </ul>
    )
})