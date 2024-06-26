import { Theme } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { useTheme } from "@/shared/lib/hooks";
import { ReactNode, useContext } from "react";

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const { showSidebar } = useContext(SidebarContext);
    const { theme } = useTheme();
    
    return (
        <main className={
            `pt-14 min-h-screen sm:pt-[70px] p-4 
            ${showSidebar ? "hidden sm:block sm:ml-[20%]" : "ml-12 sm:ml-14 lg:ml-20"} 
            ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}
        `}>
            {children}
        </main>
    )
}