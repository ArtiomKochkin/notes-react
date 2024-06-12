import { useGetLabelsQuery } from "@/entities/labels";
import { NoteView } from "@/shared/const";
import { Label, Loading, Error } from "@/shared/ui";

interface NoteLabelListProps {
    labels: number[],
    type: NoteView,
    onClick?: () => void
}

const NoteLabelList = ({ labels, type, onClick }: NoteLabelListProps) => {
    const { isLoading, isError, data = [] } = useGetLabelsQuery(null);
    const filteredLabels = data?.filter(label => labels.includes(label.id));
 
    return (
        <>
            <Loading isLoading={isLoading}>Загрузка ярлыков...</Loading>
            <Error isError={isError}/>
            <ul 
                onClick={onClick}
                className={`flex-center gap-1 ${type == NoteView.OPENED 
                    ? "flex-wrap" : "flex-shrink-0 overflow-hidden pt-1"
                }`}
            >
                {filteredLabels.map(label => 
                    <Label key={label.id} name={label.name} />
                )}
            </ul>
        </>

    )
}

export default NoteLabelList;