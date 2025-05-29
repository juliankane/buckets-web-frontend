
import ProfileHeader from "@features/headers/ProfileHeader";
import { SidePanel } from "@features/SidePanel";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
    return(
        <div className='bg-background-rich min-h-screen min-w-screen flex p-3' style={{ height: "100%" }}>
            <SidePanel />
                
            <div id="right" className="column flex-grow">
                <div className="top-right flex-shrink-0 flex p-3 pl-10 bg-background-rich border-b-2 border-border">
                    <ProfileHeader />
                </div>
                <div className="bottom flex-grow overflow-y-auto">
                    <Outlet />
                </div>
            </div>
   
        </div>
    )
}

export {ProfileLayout}