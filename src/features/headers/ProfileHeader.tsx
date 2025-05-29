import { SearchBar } from "@components/SearchBar"
import { ProfileMenu } from "@features/headers/components/ProfileMenu"

export default function ProfileHeader(){
    function setSearchTerm(value: unknown) {
        throw new Error(`Function not implemented. ${value}`)
    }

    return ( 
        
        <div className="flex flex-1 justify-between">  
                <SearchBar
                    className={`bg-black-warm text-text-primary px-3 py-1 rounded-lg outline-none
                    focus:bg-background-rich focus:border-1 focus:border-bucket-aqua`}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder={"Search buckets"}
                />
   

            <div className="ml-auto items-center space-x-3">
                <ProfileMenu/>
            </div>
        </div>
    )
}

