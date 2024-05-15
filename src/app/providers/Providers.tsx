import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { NotesViewProvider } from "./NotesViewProvider";
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
 
    return (
        <StoreProvider>
            <ThemeProvider>
                <SidebarProvider>
                    <NotesViewProvider>
                        {children}
                    </NotesViewProvider>
                </SidebarProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default Providers;