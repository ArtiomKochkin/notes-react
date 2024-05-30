import { EditLabel, RemoveLabel } from "@/features/label";
import { ILabel } from "@/shared/types";
import { MdOutlineLabel } from "react-icons/md";

interface LabelItemProps {
    label: ILabel
}

const LabelItem = ({ label }: LabelItemProps) => {
 
    return (
        <li className="custom-border w-10/12 sm:w-6/12 mx-auto p-2 cursor-pointer transition-all lg:hover:shadow-custom flex-center justify-between">
            <MdOutlineLabel />
            <EditLabel label={label}/>
            <RemoveLabel id={label.id}/>
        </li>
    )
}

export default LabelItem;