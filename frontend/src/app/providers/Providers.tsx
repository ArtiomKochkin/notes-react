import { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { NotesViewProvider } from "./NotesViewProvider";
import { SidebarProvider } from "./SidebarProvider";
import { ThemeProvider } from "./ThemeProvider";
import { SearchProvider } from "./SearchProvider";
import { AuthProvider } from "./AuthProvider";

interface ProvidersProps {
    children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
 
    return (
        <StoreProvider>
            <AuthProvider>
                <ThemeProvider>
                    <SidebarProvider>
                        <NotesViewProvider>
                            <SearchProvider>
                                {children}
                            </SearchProvider>
                        </NotesViewProvider>
                    </SidebarProvider>
                </ThemeProvider>
            </AuthProvider>
        </StoreProvider>
    )
}