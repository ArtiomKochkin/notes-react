import { useGetLabelsQuery } from "@/entities/labels";
import LabelItem from "../LabelItem/LabelItem";
import { Loading, Error, Title } from "@/shared/ui";

const LabelList = () => {
    const { isLoading, isError, data = [] } = useGetLabelsQuery(null);
 
    return (
        <div>
            {data.length <= 0 && <Title>Ярлыков нет</Title>}
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

export default LabelList;