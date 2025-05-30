import { SearchBar } from "@components/SearchBar"
import { ProfileMenu } from "@features/headers/components/ProfileMenu"
import { useLocation } from "react-router-dom"
import { HeaderLogo } from "@assets/headerlogo"
import { NotificationMenu } from "./components/NotificationMenu"

function SettingsHeaderContent() {
    return (
        <div className="flex flex-1 items-center justify-between">
            <HeaderLogo color='red' text='settings'/>
        </div>
    )
}

export default function ProfileHeader() {
    const location = useLocation();

    function setSearchTerm(value: unknown) {
        throw new Error(`${value}`)
    }

    const isSettings = location.pathname.includes("settings");

    return (
        <div className="flex flex-1 justify-between">
            {isSettings ? (
                <SettingsHeaderContent />
            ) : (
                <SearchBar
                    className={`bg-black-warm text-text-primary px-3 py-1 rounded-lg outline-none
                    focus:bg-background-rich focus:border-1 focus:border-bucket-aqua`}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={"Search buckets"}
                />
            )}
            


            {/** Right Side - Constant ProfileHeader components */}
            <div className="ml-auto flex items-center space-x-3 max-h-48">

                <div className="max-w-48 max-h-48 flex items-center space-x-2" >
                    <NotificationMenu />
                    <ProfileMenu />
                </div>
            </div>
        </div>
    )
}
