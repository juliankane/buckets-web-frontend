import { Outlet } from "react-router-dom"

export function ColorLayout() {
    return(
        <div className="bg-background-rich min-h-screen min-w-screen"> 
            <Outlet/>
        </div>
    )
}



