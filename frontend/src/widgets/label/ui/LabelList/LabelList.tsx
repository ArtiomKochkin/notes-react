import { useGetLabelsQuery } from "@/entities/labels";
import { Loading, Error } from "@/shared/ui";
import { LabelItem } from "../LabelItem/LabelItem";

export const LabelList = () => {
    const { isLoading, isError, data = [] } = useGetLabelsQuery(null);

    return (
        <div>
            <Loading isLoading={isLoading}>Загрузка ярлыков...</Loading>
            <Error isError={isError}/>
            <ul className="text-center flex flex-col gap-4">
                {data?.map(item => 
                    <LabelItem key={item.id} label={item}/>
                )}
            </ul>
        </div>
    )
}