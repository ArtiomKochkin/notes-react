import { MainLayout } from "@/app/layouts";
import { AddLabel } from "@/features/label";
import { LabelList } from "@/widgets/label";

export const LabelsPage = () => {

    return (
        <MainLayout>
            <AddLabel />
            <LabelList />
        </MainLayout>
    )
}