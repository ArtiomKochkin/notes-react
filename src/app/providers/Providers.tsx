import { ReactNode } from "react";
import SidebarProvider from "./SidebarProvider/SidebarProvider";
import NotesViewProvider from "./NotesViewProvider/NotesViewProvider";

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
 
    return (
        <SidebarProvider>
            <NotesViewProvider>
                {children}
            </NotesViewProvider>
        </SidebarProvider>
    )
}

export default Providers;