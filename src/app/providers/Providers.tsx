import { ReactNode } from "react";
import SidebarProvider from "./SidebarProvider/SidebarProvider";

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
 
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default Providers;