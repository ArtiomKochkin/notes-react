import { AuthButton } from "@/features/authButton";
import { Search } from "@/features/search";
import { ThemeSwitcher } from "@/features/themeSwitcher";
import { ViewSwitcher } from "@/features/viewSwitcher";
import { Logo } from "@/shared/ui";
import HeaderMenuButton from "../HeaderMenuButton/HeaderMenuButton";

const Header = () => {

    return (
        <div className="fixed top-0 left-0 z-50 w-screen flex justify-between items-center py-2 px-3 sm:px-5 bg-light border-dark border-b shadow-md">
            <div className="flex-center w-2/3">
                <HeaderMenuButton/>
                <Logo/>
                <Search/>
            </div>
            <div className="flex-center">
                <ViewSwitcher/>
                <ThemeSwitcher/>
                <AuthButton />
            </div>
        </div>
    )
}

export default Header;