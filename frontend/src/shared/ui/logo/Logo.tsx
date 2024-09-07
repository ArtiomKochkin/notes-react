import { useNavigate } from "react-router-dom";
import { SlNote } from "react-icons/sl";

export const Logo = () => {
    const nav = useNavigate();
 
    return (
        <div
            title="Заметки"
            onClick={() => nav('/')}
            className="flex-center ml-2 sm:ml-5 cursor-pointer"
        >
            <SlNote/>
            <div className="text-xl sm:text-3xl sm:ml-1 sm-text-shadow sm:text-shadow">
                Notes
            </div>
        </div>
    )
}