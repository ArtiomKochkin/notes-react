import { createContext } from "react";

export interface ISidebarContext {
    showSidebar?: boolean,
    setShowSidebar?: (showSidebar: boolean) => void,
}

export const SidebarContext = createContext<ISidebarContext>({});