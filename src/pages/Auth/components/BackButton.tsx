import { ButtonHTMLAttributes, FC } from "react"
import { BackArrow as BackArrowIcon } from "../../../assets";

type BackButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton: FC<BackButtonProps> = ({onClick, ...rest}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            {...rest}
            className="absolute left-0 ml-4 group ring-2 text-text-secondary ring-border w-12 h-12 
            flex items-center justify-center rounded-full
            hover:bg-black-warm hover:text-text-primary hover:ring-text-primary hover:ring-3 transition-all"
        >
            <BackArrowIcon className="w-12 h-12 rotate-12 p-1" />
        </button>
    );
};

export {BackButton};