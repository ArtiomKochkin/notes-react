import { useContext, useEffect } from "react";
import { useTheme, useWindowSize } from "@/shared/lib/hooks";
import { SidebarContext } from "@/shared/lib/context";
import SidebarItem from "../SidebarItem/SidebarItem";
import { changeStateSidebar } from "../../lib/utils/changeStateSidebar";
import { Theme } from "@/shared/const";
import { SIDEBAR_ITEMS } from "../../const";

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);
    const { width } = useWindowSize();
    const { theme } = useTheme();

    useEffect(() => {
        changeStateSidebar(width, setShowSidebar!);
        return () => changeStateSidebar(width, setShowSidebar!);
    }, [width, setShowSidebar]);
 
    return (
        <aside className={`fixed left-0 top-14 z-10 text-lg pt-0 sm:pt-5 pr-2 lg:w-1/5 ${theme == Theme.LIGHT ? "bg-light" : "bg-dark"} border-r border-blue min-h-[92vh] ${showSidebar ? "w-4/5 sm:w-1/3" : "w-12 sm:w-14 lg:w-20 pr-0"}`}>
            {SIDEBAR_ITEMS.map(item => 
                <SidebarItem key={item.name} name={item.name} icon={item.icon} link={item.link}/>
            )}
        </aside>
    )
}

export default Sidebar;