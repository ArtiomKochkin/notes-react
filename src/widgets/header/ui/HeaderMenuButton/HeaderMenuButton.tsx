import { SidebarContext } from "@/shared/lib/context/SidebarContext";
import { useContext } from "react";
import { MdMenu } from "react-icons/md";

const HeaderMenuButton = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);

    return (
        <button 
            title="Главное меню"
            onClick={() => setShowSidebar(!showSidebar)}
        >
            <MdMenu />
        </button>
    )
}

export default HeaderMenuButton;