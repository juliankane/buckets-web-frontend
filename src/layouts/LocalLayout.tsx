import PublicHeader from "@features/headers/PublicHeader"
import { Outlet } from "react-router-dom";


function LocalLayout() {
    return(
         <div className='bg-background-rich min-h-screen min-w-screen'> 
            <PublicHeader />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export {LocalLayout}