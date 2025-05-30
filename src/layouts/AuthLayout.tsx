import { AuthHeader } from "@features/headers/AuthHeader";
import { Outlet } from "react-router-dom";


function AuthLayout() {
    return(
         <div> 
            <AuthHeader />
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export {AuthLayout}