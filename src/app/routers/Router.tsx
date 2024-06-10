import { LabelPage } from "@/pages/label";
import { ISidebarItemComponent } from "@/shared/types";
import React from "react";
import { Route, Routes } from "react-router-dom";

interface RouterProps {
    items: ISidebarItemComponent[]
}

const Router = ({ items }: RouterProps) => {
 
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
            <Route path="*" element={<div>Not found</div>}/>
        </Routes>
    )
}

export default Router;