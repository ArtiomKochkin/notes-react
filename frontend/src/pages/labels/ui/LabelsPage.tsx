import { MainLayout } from "@/app/layouts";
import { LabelList } from "@/widgets/label";
import { AddLabel } from "@/features/label";
import { useEffect } from "react";

export const LabelsPage = () => {

    useEffect(() => {
        document.title = "Ярлыки | Notes";
    }, []);
    
    return (
        <MainLayout>
            <AddLabel />
            <LabelList />
        </MainLayout>
    )
}