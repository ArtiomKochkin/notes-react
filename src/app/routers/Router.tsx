import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ISidebarItemComponent } from "@/shared/types";
import { Loading } from "@/shared/ui";

const LabelPage = lazy(() => import("@/pages/label").then(module => ({ default: module.LabelPage})));
const MainPage = lazy(() => import("@/pages/main").then(module => ({ default: module.MainPage})));

interface RouterProps {
    items: ISidebarItemComponent[]
}

export const Router = ({ items }: RouterProps) => {
 
    return (
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            <Routes>
                {items.map(item => 
                    <Route 
                        element={React.createElement(item.component)} 
                        path={item.link} 
                        key={item.name}
                    />
                )}
                <Route element={<LabelPage/>} path="/label"/>
                <Route element={<MainPage/>} path="*"/>
            </Routes>
        </Suspense>
    )
}