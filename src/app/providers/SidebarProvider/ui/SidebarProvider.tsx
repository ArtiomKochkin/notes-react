import { LOCAL_STORAGE_SIDEBAR_KEY } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { ReactNode, useState } from "react";

interface SidebarProviderProps {
    children: ReactNode,
}

const defaultSidebarView = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY);
const defaultSidebarViewByWidth = window.innerWidth > 640;
const initialSidebarView = defaultSidebarView !== null ? JSON.parse(defaultSidebarView) : defaultSidebarViewByWidth;

const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(initialSidebarView);

    return (
        <SidebarContext.Provider value={{showSidebar, setShowSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider;