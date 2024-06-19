import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { MouseEvent, ReactNode, RefObject } from "react";

interface NoteSettingsItemProps {
    children: ReactNode,
    onClick?: (() => void) | ((e: MouseEvent) => void),
    innerRef?: RefObject<HTMLLIElement>
}

export const NoteSettingsItem = ({ children, onClick, innerRef }: NoteSettingsItemProps) => {
    const { theme } = useTheme();
 
    return (
        <li 
            onClick={onClick}
            ref={innerRef}
            className={
                `py-1 px-2 text-sm rounded-md cursor-pointer ${theme == Theme.LIGHT 
                    ? "text-dark hover:text-light hover:bg-blue" 
                    : "text-light hover:text-blue hover:bg-inherit"}
                `
            }
        >
            {children}
        </li>
    )
}