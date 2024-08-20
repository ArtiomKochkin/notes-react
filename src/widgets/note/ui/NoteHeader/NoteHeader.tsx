import React, { RefObject } from "react";
import { PinNote } from "@/features/noteSettings";
import { NoteView } from "@/shared/const";
import { INote } from "@/shared/types";
import { Close, Dots } from "@/shared/ui";
import { NoteName } from "../NoteName/NoteName";

interface NoteHeaderProps {
    note: INote,
    toggleNote?: () => void,
    closeNote?: () => void,
    settingsRef: RefObject<HTMLDivElement>,
    isShow: boolean,
    setIsShow: (isShow: boolean) => void
    isOpen: boolean
}

export const NoteHeader = React.memo(({ isOpen, note, toggleNote, closeNote, settingsRef, isShow, setIsShow }: NoteHeaderProps) => {
 
    return (
        <>
            {!isOpen
                ? (
                    <div className="flex-center justify-between flex-shrink-0">
                        <div onClick={toggleNote} className="w-full sm:w-[80%]">
                            <NoteName note={note} type={NoteView.CLOSED} />
                        </div>
                        <div className="hidden sm:flex sm:flex-center gap-1">
                            <PinNote note={note}/>
                            <Dots refElement={settingsRef} show={isShow} setShow={setIsShow}/>
                        </div>
                    </div>
                )
                : (
                    <div className="flex-center justify-between">
                        <NoteName note={note} type={NoteView.OPENED}/>
                        <div className="flex-center gap-1 cursor-pointer">
                            <PinNote note={note}/>
                            <Dots refElement={settingsRef} show={isShow} setShow={setIsShow}/>
                            <Close closeElement={closeNote!}/>
                        </div>
                    </div>
                )
            }
        </>
    )
})