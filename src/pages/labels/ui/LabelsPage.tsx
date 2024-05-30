import { MainLayout } from "@/app/layouts";
import { AddLabel } from "@/features/label";
import { LabelList } from "@/widgets/label";

const LabelsPage = () => {
 
    return (
        <MainLayout>
            <AddLabel />
            <LabelList />
        </MainLayout>
    )
}

export default LabelsPage;