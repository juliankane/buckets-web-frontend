import { FC } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



const HelpButton: FC = () => {
    return (
        <Link to={"/help"} className="hover:cursor-pointer flex items-center">
            <QuestionMarkCircleIcon className="w-6 h-6 text-gray-400"/>
        </Link>
    )
}


export {HelpButton}