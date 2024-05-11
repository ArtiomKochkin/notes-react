import { useWindowSize } from "@/shared/lib/hooks/useWindowSize";
import Button from "@/shared/ui/button/Button";
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