import { BsTrash } from "react-icons/bs";
import { MdOutlineLabel, MdOutlineArchive, MdSearch } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { ISidebarItemComponent } from "../types";
import { ArchivePage } from "@/pages/archive";
import { DeletedPage } from "@/pages/deleted";
import { LabelsPage } from "@/pages/labels";
import { MainPage } from "@/pages/main";
import { SearchPage } from "@/pages/search";

export const SIDEBAR_ITEMS: ISidebarItemComponent[] = [
    {
        name: "Заметки",
        link: "/",
        icon: <SlNote />,
        component: MainPage
    },
    {
        name: "Поиск",
        link: "/search",
        icon: <MdSearch />,
        component: SearchPage
    },
    {
        name: "Ярлыки",
        link: "/labels",
        icon: <MdOutlineLabel />,
        component: LabelsPage
    },
    {
        name: "Архив",
        link: "/archive",
        icon: <MdOutlineArchive />,
        component: ArchivePage
    },
    {
        name: "Корзина",
        link: "/deleted",
        icon: <BsTrash />,
        component: DeletedPage
    },
];