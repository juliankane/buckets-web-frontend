import PublicHeader from "@features/headers/PublicHeader"
import { Outlet } from "react-router-dom";


function LocalLayout() {
    return(
        <div>         
            <PublicHeader />
            <main className="w-full pt-35 h-screen">
                <Outlet/>
            </main>
        </div>
    )
}

export {LocalLayout}