import { ChangeEvent, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { useCreateLabelMutation } from "@/entities/labels";
import { handleEnterPress } from "@/shared/lib/utils";
import { Button, Input } from "@/shared/ui";
import { InputType } from "@/shared/const";

const initialLabel = {
    id: Date.now(),
    notes: [],
    timestamp: Date.now()  
}

export const AddLabel = () => {
    const [createLabel] = useCreateLabelMutation();
    const [hasValue, setHasValue] = useState(false);
    const [text, setText] = useState("");

    const handleAddLabel = async () => {
        if (text) {
            try {
                await createLabel({ 
                    ...initialLabel,
                    name: text
                }).unwrap();
            } catch (err) {
                console.error('Failed to create label:', err);
            }
            setText("");
            setHasValue(false);
        }
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        (e.target.value != "") ? setHasValue(true) : setHasValue(false)
    };

    return (
        <div className="flex-center flex-col mt-4 sm:mt-0">
            <Input 
                inputType={InputType.TEXT} 
                isShow={false}
                placeholder="Новый ярлык..."
                value={text}
                onChange={handleChangeInput}
                onKeyDown={e => handleEnterPress(e, handleAddLabel)}
            />
            <Button createButton onClick={handleAddLabel} disabled={!hasValue}>
                <span className="mr-2">Создать ярлык</span>
                <FaRegPlusSquare />
            </Button>
        </div>
    )
}