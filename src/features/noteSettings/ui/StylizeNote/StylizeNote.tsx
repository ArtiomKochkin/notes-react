import React from "react";
import { useOutside } from "@/shared/lib/hooks";
import { INote } from "@/shared/types";
import { NoteSettingsItem, NoteSubSettings } from "@/shared/ui";
import { SetCustomBgNote } from "./SetCustomBgNote";
import { SetBgNote } from "./SetBgNote";
import { SetColorTextNote } from "./SetColorTextNote";
import { SetInitialColors } from "./SetInitialColors";

interface StylizeNoteProps {
    note: INote
}

export const StylizeNote = React.memo(({ note }: StylizeNoteProps) => {
    const { ref: styleRef, isShow, setIsShow } = useOutside<HTMLLIElement>(false);
 
    return (
        <>
            {(!note.isDeleted && !note.isArchive) && (
                <NoteSettingsItem innerRef={styleRef}>
                    <span onClick={() => setIsShow(!isShow)}>Cтилизовать заметку</span>
                    {isShow && (
                        <NoteSubSettings>
                            <SetInitialColors note={note}/>
                            <SetCustomBgNote note={note}/>
                            <SetBgNote note={note}/>
                            <SetColorTextNote note={note}/>
                        </NoteSubSettings>
                    )}
                </NoteSettingsItem>
            )}
        </>
    )
})