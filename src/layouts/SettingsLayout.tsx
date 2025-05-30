
import SettingsViewHeader from "@features/profile/view-headers/SettingsViewHeader";
import { Outlet } from "react-router-dom";

export function SettingsLayout() {
    return (
        <div className="w-full min-h-screen bg-gray-100 py-8 px-4">
            <div className="flex flex-col w-250 max-w-400 mx-35 bg-white shadow-lg rounded-lg px-8 py-6 ">
                <SettingsViewHeader />
                <div className="mt-6 pt-15 w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}