import { useCreateLabelMutation } from "@/entities/labels";
import { InputType } from "@/shared/const";
import { useActions } from "@/shared/lib/hooks";
import { Button, Input } from "@/shared/ui";
import { ChangeEvent, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

const AddLabel = () => {
    const [createLabel] = useCreateLabelMutation();
    const { addLabel } = useActions();
    const [hasValue, setHasValue] = useState(false);
    const [text, setText] = useState("");

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (e.target.value != "") {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    };

    const handleAddLabel = async () => {
        try {
            const newNote = await createLabel({ name: text }).unwrap();
            addLabel(newNote);
        } catch (err) {
            console.error('Failed to create label:', err);
        }
        setText("");
        setHasValue(false);
    };

    return (
        <div className="flex-center flex-col mt-4 sm:mt-0">
            <Input 
                inputType={InputType.TEXT} 
                isShow={false}
                placeholder="Новый ярлык..."
                value={text}
                onChange={handleChangeInput}
            />
            <Button createButton onClick={handleAddLabel} disabled={!hasValue}>
                <span className="mr-2">Создать ярлык</span>
                <FaRegPlusSquare />
            </Button>
        </div>
    )
}

export default AddLabel;