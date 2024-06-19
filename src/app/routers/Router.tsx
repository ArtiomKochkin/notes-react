import { LabelPage } from "@/pages/label";
import { MainPage } from "@/pages/main";
import { ISidebarItemComponent } from "@/shared/types";
import React from "react";
import { Route, Routes } from "react-router-dom";

interface RouterProps {
    items: ISidebarItemComponent[]
}

export const Router = ({ items }: RouterProps) => {
 
    return (
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
    )
}