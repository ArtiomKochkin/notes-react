import { ArchivePage } from "@/pages/archive";
import { DeletedPage } from "@/pages/deleted";
import { LabelsPage } from "@/pages/labels";
import { MainPage } from "@/pages/main";
import { Route, Routes } from "react-router-dom";

const Router = () => {
 
    return (
        <Routes>
            <Route element={<MainPage/>} path="/"/>
            <Route element={<ArchivePage/>} path="/archive"/>
            <Route element={<DeletedPage/>} path="/deleted"/>
            <Route element={<LabelsPage/>} path="/labels"/>
        </Routes>
    )
}

export default Router;