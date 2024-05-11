import { MainPage } from "@/pages/main";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

const BaseLayout = () => {
 
    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar />
            <MainPage />
        </div>
    )
}

export default BaseLayout;