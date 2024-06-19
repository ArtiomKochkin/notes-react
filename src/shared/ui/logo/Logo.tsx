import { SlNote } from "react-icons/sl";

export const Logo = () => {
 
    return (
        <div className="flex-center ml-2 sm:ml-5 cursor-pointer">
            <SlNote/>
            <div className="text-xl sm:text-3xl sm:ml-1 sm-text-shadow sm:text-shadow">
                Notes
            </div>
        </div>
    )
}