import { ILabel, INote } from "@/shared/types";
import EditLabelNote from "./EditLabelNote";

interface EditLabelListNoteProps {
    labels: ILabel[],
    note: INote
}

const EditLabelListNote = ({ labels, note }: EditLabelListNoteProps) => {
 
    return (
        <ul className="flex flex-col gap-1">
            {labels?.map(label => 
                <EditLabelNote key={label.id} label={label} note={note}/>
            )}
        </ul>
    )
}

export default EditLabelListNote;