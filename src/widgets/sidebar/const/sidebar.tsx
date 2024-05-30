import { BsTrash } from "react-icons/bs";
import { MdOutlineLabel, MdOutlineEdit, MdOutlineArchive } from "react-icons/md";
import { SlNote } from "react-icons/sl";

export const SIDEBAR_ITEMS = [
    {
        name: "Заметки",
        link: "/",
        icon: <SlNote />
    },
    {
        name: "Ярлык",
        link: "/",
        icon: <MdOutlineLabel />
    },
    {
        name: "Ярлыки",
        link: "/labels",
        icon: <MdOutlineEdit />
    },
    {
        name: "Архив",
        link: "/archive",
        icon: <MdOutlineArchive />
    },
    {
        name: "Корзина",
        link: "/deleted",
        icon: <BsTrash />
    }
]