import { Logo } from "@assets/index";
import { FC } from "react";
import { Link } from "react-router-dom";




const LogoBoxHeader: FC = () => {
    return (
         <Link to="/" className="hover:cursor-pointer flex items-center" aria-label='/'>
                <span className="w-32 h-32 flex items-center justify-center rounded-full bg-bucket-red ">
                    <Logo className="w-4 h-4 md:w-8 md:h-8 lg:w-24 lg:h-24 rotate-12 fill transition-all duration-200 " />
                </span>
                <span className='ml-4 font-sarif-sans sarif-sans font-bold text-text-heading text-4xl tracking-wider'>
                    buckets
                </span>
        </Link>
    )
}


export { LogoBoxHeader }