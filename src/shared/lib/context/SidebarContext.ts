import { createContext } from "react";

export interface SidebarContextProps {
    showSidebar: boolean,
    setShowSidebar: (showSidebar: boolean) => void,
}

export const SidebarContext = createContext<SidebarContextProps>({
    showSidebar: true,
    setShowSidebar: () => {}
});