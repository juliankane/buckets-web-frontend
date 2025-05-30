
import ProfileHeader from "@features/headers/ProfileHeader";
import { SidePanel } from "@features/side-panel";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
    return(
        <div className='flex' style={{ height: "100%" }}>
      
            <SidePanel />
       
            <div id="right" className="column flex-grow">
                <div className="top-right flex-shrink-0 flex p-3 pl-10 border-b-2 border-border">
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