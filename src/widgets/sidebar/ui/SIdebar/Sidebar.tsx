import { SlNote } from "react-icons/sl";
import { MdOutlineLabel, MdOutlineArchive, MdOutlineEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { useWindowSize } from "@/shared/lib/hooks";
import { SidebarContext } from "@/shared/lib/context";
import SidebarItem from "../SidebarItem/SidebarItem";
import { changeStateSidebar } from "../../lib/utils/changeStateSidebar";

const Sidebar = () => {
    const { showSidebar, setShowSidebar } = useContext(SidebarContext);
    const { width } = useWindowSize();

    useEffect(() => {
        changeStateSidebar(width, setShowSidebar);
        return () => changeStateSidebar(width, setShowSidebar);
    }, [width, setShowSidebar]);
 
    return (
        <aside className={`fixed left-0 top-14 z-10 text-lg pt-0 sm:pt-5 pr-2 lg:w-1/5 border-r border-dark min-h-[92vh] ${showSidebar ? "w-4/5 sm:w-1/3" : "w-12 sm:w-14 lg:w-20 pr-0"}`}>
            <SidebarItem name="Заметки" icon={<SlNote />} />
            <SidebarItem name="Ярлыки" icon={<MdOutlineLabel />} />
            <SidebarItem name="Создать ярлык" icon={<FaRegPlusSquare />} />
            <SidebarItem name="Изменение ярлыков" icon={<MdOutlineEdit />} />
            <SidebarItem name="Архив" icon={<MdOutlineArchive />} />
            <SidebarItem name="Корзина" icon={<BsTrash />} />
        </aside>
    )
}

export default Sidebar;