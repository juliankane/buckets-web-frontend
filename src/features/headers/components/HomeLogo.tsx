import { Logo } from "@assets/index";
import { FC } from "react";
import { Link } from "react-router-dom";

type HomeLogo = {
    logoFill?: boolean
    showTitle?: boolean
}

const HomeLogo: FC<HomeLogo> = ({ logoFill = true, showTitle = true }) => {
    const logoBg = logoFill ? 'bg-bucket-orange' : 'bg-border';

    return (
        <nav className="flex items-center gap-4">
            <Link to="/" className="hover:cursor-pointer flex items-center" aria-label="/">
                <span className={`w-16 h-16 flex items-center justify-center rounded-full ${logoBg}`}>
                    <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-12 lg:h-12 rotate-12 fill transition-all duration-200" />
                </span>

                {showTitle && <h1 className='ml-4 font-sans font-bold text-text-heading text-4xl tracking-wider'>
                    buckets
                </h1>}
            </Link>
        </nav>
    )
}

export { HomeLogo }
