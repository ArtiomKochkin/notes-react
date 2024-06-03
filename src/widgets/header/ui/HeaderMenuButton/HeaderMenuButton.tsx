import { SidebarContext } from "@/shared/lib/context";
import { useContext } from "react";
import { MdMenu } from "react-icons/md";

const HeaderMenuButton = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);

    return (
        <button 
            title="Меню"
            onClick={() => setShowSidebar(!showSidebar)}
        >
            <MdMenu />
        </button>
    )
}

export default HeaderMenuButton;