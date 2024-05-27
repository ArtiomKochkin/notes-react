import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { ReactNode } from "react";

interface NoteSettingsItemProps {
    children: ReactNode,
    onClick: () => void
}

const NoteSettingsItem = ({ children, onClick }: NoteSettingsItemProps) => {
    const { theme } = useTheme();
 
    return (
        <li 
            onClick={onClick}
            className={`py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT ? "text-dark hover:text-light hover:bg-blue" : "text-light hover:text-blue hover:bg-inherit"}`}
        >
            {children}
        </li>
    )
}

export default NoteSettingsItem;