import { SidebarContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface SidebarProviderProps {
    children: ReactNode,
}

const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true);

    return (
        <SidebarContext.Provider value={{showSidebar, setShowSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider;