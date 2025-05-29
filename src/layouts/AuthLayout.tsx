import { AuthHeader } from "@features/headers/AuthHeader";
import { Outlet } from "react-router-dom";


function AuthLayout() {
    return(
         <div className='bg-background-rich min-h-screen min-w-screen'> 
            <AuthHeader />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export {AuthLayout}