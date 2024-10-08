import { useContext } from "react";
import { AuthContext, SidebarContext } from "@/shared/lib/context";
import { ISidebarItem } from "@/shared/types";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {
    items: ISidebarItem[]
}

export const Sidebar = ({ items }: SidebarProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const authContext = useContext(AuthContext);

    if (!authContext?.isAuth) return null;
 
    return (
        <aside 
            className={`
                fixed left-0 top-[45px]  z-10 text-lg pt-0 sm:pt-5 pr-2 lg:w-1/5 min-h-[92vh] 
                ${showSidebar ? "w-full sm:w-1/5" : "w-14 lg:w-20 pr-0"}
            `}
        >
            {items.map(item => 
                <SidebarItem key={item.name} name={item.name} icon={item.icon} link={item.link}/>
            )}
        </aside>
    )
}

export default Sidebar;