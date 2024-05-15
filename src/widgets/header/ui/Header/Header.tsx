import { Search } from "@/features/search";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { ViewSwitcher } from "@/features/viewSwitcher";
import { Logo } from "@/shared/ui";
import HeaderMenuButton from "../HeaderMenuButton/HeaderMenuButton";
import { useTheme } from "@/shared/lib/hooks";
import { Theme } from "@/shared/const";

const Header = () => {
    const { theme } = useTheme();

    return (
        <div className={`fixed top-0 left-0 z-50 w-screen flex justify-between items-center py-2 px-3 sm:px-5 border-blue border-b shadow-md ${theme == Theme.LIGHT ? "bg-light text-dark" : "bg-dark text-light"}`}>
            <div className="flex-center w-2/3">
                <HeaderMenuButton/>
                <Logo/>
                <Search/>
            </div>
            <div className="flex-center">
                <ViewSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default Header;