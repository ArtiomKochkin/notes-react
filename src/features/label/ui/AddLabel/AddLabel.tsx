import { useCreateLabelMutation } from "@/entities/labels";
import { InputType } from "@/shared/const";
import { useActions } from "@/shared/lib/hooks";
import { handleEnterPress } from "@/shared/lib/utils";
import { Button, Input } from "@/shared/ui";
import { ChangeEvent, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

export const AddLabel = () => {
    const [createLabel] = useCreateLabelMutation();
    const { addLabel } = useActions();
    const [hasValue, setHasValue] = useState(false);
    const [text, setText] = useState("");

    const handleAddLabel = async () => {
        if (text) {
            try {
                const newLabel = await createLabel({ 
                    name: text,
                    notes: [],
                    timestamp: Date.now()
                }).unwrap();
                addLabel(newLabel);
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