import React, { useContext } from "react";
import { Search } from "@/features/search";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { ViewSwitcher } from "@/features/viewSwitcher";
import { Logo } from "@/shared/ui";
import { HeaderMenuButton } from "../HeaderMenuButton/HeaderMenuButton";
import { AuthContext } from "@/shared/lib/context";
import { Logout } from "@/features/logout";

export const Header = React.memo(() => {
    const { isAuth } = useContext(AuthContext);

    return (
        <div 
            className="fixed top-0 left-0 z-50 w-screen flex justify-between items-center py-2 px-3 sm:px-5 border-blue border-b shadow-md"
        >
            <div className="flex-center w-2/3">
                {isAuth && <HeaderMenuButton/>}
                <Logo/>
                {isAuth && <Search/>}
            </div>
            <div className="flex-center">
                {isAuth && <ViewSwitcher/>}
                <ThemeSwitcher/>
                {isAuth && <Logout/>}
            </div>
        </div>
    )
})