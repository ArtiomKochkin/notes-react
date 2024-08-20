import { ReactNode } from "react";
import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";

interface NoteSubSettingsProps {
    children: ReactNode
}

export const NoteSubSettings = ({ children }: NoteSubSettingsProps) => {
    const { theme } = useTheme();
 
    return (
        <div className={
            `w-[100%] absolute z-30 right-1 bottom-1 custom-border shadow-custom p-2 h-[80%] scrollbar
            ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}`
        }>
            {children}
        </div>
    )
}