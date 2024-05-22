import { NoteView } from "@/shared/const";
import { ILabel } from "@/shared/types";
import { Label } from "@/shared/ui";

interface NoteLabelListProps {
    labels: ILabel[],
    type: NoteView,
    onClick?: () => void
}

const NoteLabelList = ({ labels, type, onClick }: NoteLabelListProps) => {
 
    return (
        <ul 
            onClick={onClick}
            className={`flex-center gap-1 ${type == NoteView.OPENED ? "flex-wrap" : "mx-0 mb-0 mt-auto overflow-hidden"}`}
            >
            {labels.map(label => 
                <Label key={label.id} name={label.name} />
            )}
        </ul>
    )
}

export default NoteLabelList;