import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Router } from "../routers";
import { SIDEBAR_ITEMS } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { Theme } from "@/shared/const";

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