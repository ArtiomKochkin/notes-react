import { MainLayout } from "@/app/layouts";
import { LabelList } from "@/widgets/label";
import { AddLabel } from "@/features/label";

export const LabelsPage = () => {

    return (
        <MainLayout>
            <AddLabel />
            <LabelList />
        </MainLayout>
    )
}