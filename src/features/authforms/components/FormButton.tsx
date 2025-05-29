import { FC } from "react";
import clsx from "clsx";

type FormButtonProps = {
    type?: "button" | "submit";
    disabled?: boolean;
    text?: string | null;
    onClick?: () => void;
};

const FormButton: FC<FormButtonProps> = ({
    type = "button",
    disabled = false,
    text,
    onClick,
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                "rounded-full h-10 w-50 text-md text-white transition-colors duration-200 ease-in-out",
                disabled
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-bucket-aqua-bright hover:bg-bucket-aqua-bright cursor-pointer"
            )}
        >
            {text}
        </button>
    );
};

export { FormButton };