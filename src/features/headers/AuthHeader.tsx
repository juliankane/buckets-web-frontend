
import { HelpButton } from "./components/HelpButton";
import { HomeLogo } from "./components/HomeLogo";

export function AuthHeader(){
    return (
        <header className='fixed inset-x-0 top-0 z-10 border-b-2 bg-background-rich border-border'>
            <div className="flex h-20 items-center justify-between gap-8 sm:px-6">
                <HomeLogo logoFill={false} showTitle={false} />
                    <div className="flex space-x-3">
                        <HelpButton/>
                    </div>
            </div>
        </header>
    )
}