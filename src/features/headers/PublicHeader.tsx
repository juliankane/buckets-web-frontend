
import { AuthButton } from './components/AuthButton';
import { HomeLogo } from './components/HomeLogo';


export default function PublicHeader() {
    return (
        <header className='fixed inset-x-0 top-0 border-b-2 bg-background-rich border-border'>
            <div className="flex h-20 items-center justify-between gap-8 sm:px-6">
                <HomeLogo logoFill={true} showTitle={true} />
                    <div className="flex space-x-3">
                        <AuthButton variant={"signin"}/>
                        <AuthButton variant={"register"}/>
                    </div>

            </div>
        </header>
    )
}