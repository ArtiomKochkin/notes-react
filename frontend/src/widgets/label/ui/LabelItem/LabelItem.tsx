import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLabel } from "react-icons/md";
import { EditLabel, RemoveLabel } from "@/features/label";
import { ILabel } from "@/shared/types";

interface LabelItemProps {
    label: ILabel
}

export const LabelItem = React.memo(({ label }: LabelItemProps) => {
    const nav = useNavigate();
    const moveToLabel = () => nav("/label", { state: label });

    return (
        <li className="custom-border w-10/12 sm:w-6/12 mx-auto p-2 cursor-pointer transition-all sm:hover:shadow-custom flex-center justify-between">
            <MdOutlineLabel />
            <EditLabel label={label} moveToLabel={moveToLabel}/>
            <RemoveLabel id={label.id}/>
        </li>
    )
})