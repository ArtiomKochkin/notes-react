import { useUpdateLabelMutation } from "@/entities/labels";
import { useActions, useEdit } from "@/shared/lib/hooks";
import { ILabel } from "@/shared/types";
import { RefObject } from "react";
import { MdOutlineEdit } from "react-icons/md";

interface EditLabelProps {
    label: ILabel
}

const EditLabel = ({ label }: EditLabelProps) => {
    const { updateLabel: editLabel } = useActions();
    const [updateLabel] = useUpdateLabelMutation();
    const { 
        isEditing, text, inputRef, 
        handleDivClick, handleInputBlur, handleTextChange, handleKeyPress
    } = useEdit(label, label.name, "name", editLabel, 
        async (patch) => {
            const result = await updateLabel(patch).unwrap();
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
                <div>{label.name}</div>
            )}
            <div onClick={handleDivClick}>
                <MdOutlineEdit />
            </div>
        </div>
    )
}

export default EditLabel;