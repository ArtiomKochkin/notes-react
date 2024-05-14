import { ReactNode } from "react";
import SidebarProvider from "./SidebarProvider/SidebarProvider";
import NotesViewProvider from "./NotesViewProvider/NotesViewProvider";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
 
    return (
        <ThemeProvider>
            <SidebarProvider>
                <NotesViewProvider>
                    {children}
                </NotesViewProvider>
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default Providers;