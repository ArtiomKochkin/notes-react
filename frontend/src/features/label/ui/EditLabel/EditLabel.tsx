import React, { RefObject } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { useUpdLabelMutation } from "@/entities/labels";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { ILabel } from "@/shared/types";

interface EditLabelProps {
    label: ILabel,
    moveToLabel: () => void
}

export const EditLabel = React.memo(({ label, moveToLabel }: EditLabelProps) => {
    const { updateLabel } = useActions();
    const [updLabel] = useUpdLabelMutation();
    const {
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
    } = useEdit(label, label.name, "name", updateLabel, 
        async (patch) => {
            const result = await updLabel(patch).unwrap();
            return result;
        }
    );

    return (
        <div className="flex-center justify-between flex-grow mx-2">
            {isEditing ? (
                <input
                    className="outline-none w-full mr-1 bg-transparent"
                    placeholder="..."
                    onBlur={handleInputBlur}
                    onChange={handleTextChange}
                    onKeyDown={handleKeyPress}
                    autoFocus
                    value={text}
                    ref={inputRef as RefObject<HTMLInputElement>}
                />
            ) : (
                <div className="w-full text-left" onClick={() => moveToLabel()}>
                    {label.name}
                </div>
            )}
            <div onClick={handleDivClick}>
                <MdOutlineEdit />
            </div>
        </div>
    )
})