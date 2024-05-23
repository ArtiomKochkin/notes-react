import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { Router } from "../routers";

const BaseLayout = () => {
 
    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar />
            <Router />
        </div>
    )
}

export default BaseLayout;