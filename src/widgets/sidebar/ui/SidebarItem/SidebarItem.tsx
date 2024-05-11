import { SidebarContext } from "@/shared/lib/context/SidebarContext";
import { ReactNode, useContext } from "react";

interface SidebarItemProps {
    icon: ReactNode,
    name: string
}

const SidebarItem = ({ icon, name }: SidebarItemProps) => {
    const { showSidebar } = useContext(SidebarContext);
 
    return (
        <div className="flex-center py-4 pl-3 sm:pl-6 pr-1 cursor-pointer transition-colors hover:bg-dark hover:text-light rounded-tr-3xl rounded-br-3xl">
            { icon }
            {showSidebar && <span className="ml-2 leading-5">{name}</span>}
        </div>
    )
}

export default SidebarItem;