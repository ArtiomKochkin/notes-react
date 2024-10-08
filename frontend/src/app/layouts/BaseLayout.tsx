import { SIDEBAR_ITEMS, Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { Router } from "../routers";
import { Sidebar } from "@/widgets/sidebar";
import { Header } from "@/widgets/header";

export const BaseLayout = () => {
    const { theme } = useTheme();
 
    return (
        <div className={`${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"} min-h-screen`}>
            <Header />
            <Sidebar items={SIDEBAR_ITEMS}/>
            <Router items={SIDEBAR_ITEMS}/>
        </div>
    )
}