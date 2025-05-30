import PublicHeader from "@features/headers/PublicHeader"
import { Outlet } from "react-router-dom";


function LocalLayout() {
    return(
         <div> 
            <PublicHeader />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export {LocalLayout}