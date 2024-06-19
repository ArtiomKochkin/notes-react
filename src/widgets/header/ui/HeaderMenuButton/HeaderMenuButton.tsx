import { LOCAL_STORAGE_SIDEBAR_KEY } from "@/shared/const";
import { SidebarContext } from "@/shared/lib/context";
import { useContext } from "react";
import { MdMenu } from "react-icons/md";

export const HeaderMenuButton = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);

    const handleClick = () => {
        if (setShowSidebar) {
            setShowSidebar(!showSidebar);
            localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, JSON.stringify(!showSidebar));
        }
    };

    return (
        <button title="Меню" onClick={handleClick}>
            <MdMenu />
        </button>
    )
}