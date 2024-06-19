import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Router } from "../routers";
import { SIDEBAR_ITEMS } from "@/shared/const";

export const BaseLayout = () => {
 
    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar items={SIDEBAR_ITEMS}/>
            <Router items={SIDEBAR_ITEMS}/>
        </div>
    )
}