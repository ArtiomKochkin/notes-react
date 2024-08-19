/* eslint-disable react-refresh/only-export-components */

import { BsTrash } from "react-icons/bs";
import { MdOutlineLabel, MdOutlineArchive, MdSearch } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { ISidebarItemComponent } from "../types";
import { lazy } from "react";

const ArchivePage = lazy(() => import("@/pages/archive").then(module => ({ default: module.ArchivePage})));
const DeletedPage = lazy(() => import("@/pages/deleted").then(module => ({ default: module.DeletedPage})));
const LabelsPage = lazy(() => import("@/pages/labels").then(module => ({ default: module.LabelsPage})));
const MainPage = lazy(() => import("@/pages/main").then(module => ({ default: module.MainPage})));
const SearchPage = lazy(() => import("@/pages/search").then(module => ({ default: module.SearchPage})));

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