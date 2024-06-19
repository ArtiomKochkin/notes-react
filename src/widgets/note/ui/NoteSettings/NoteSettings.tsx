import { Theme } from "@/shared/const";
import { useTheme } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { RefObject } from "react";
import { NOTE_SETTINGS_COMPONENTS } from "../../lib";
import React from "react";

interface NoteSettingsProps {
    isShow: boolean,
    note: INote,
    refElement: RefObject<HTMLDivElement>,
}

export const NoteSettings = React.memo(({ isShow, note, refElement }: NoteSettingsProps) => {
    const { theme } = useTheme();

    return (
        <>
            {isShow && 
                <div
                    ref={refElement}
                    className={
                        `absolute z-20 right-1 top-1 custom-border shadow-custom p-2 
                        ${theme == Theme.LIGHT ? "bg-light" : "bg-dark"}`
                    }
                >
                    <ul className="flex flex-col gap-1">
                        {NOTE_SETTINGS_COMPONENTS.map((Component, i) => (
                            <Component key={i} note={note} />
                        ))}
                    </ul>
                </div>
            }
        </>
    )
})