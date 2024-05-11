import { useWindowSize } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui";
import { FaRegCircleUser } from "react-icons/fa6";

const AuthButton = () => {
    const { width } = useWindowSize();
 
    return (
        <Button>
            {width < 640 ? <FaRegCircleUser/> : "Вход"}
        </Button>
    )
}

export default AuthButton;