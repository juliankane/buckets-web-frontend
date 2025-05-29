import { FC, ReactNode } from "react";

type SeperatorProps = {
    children?: ReactNode
    text?: string
}

const FormSeperator: FC<SeperatorProps> = ({children, text=""}) => {
    return (
        <div className="flex items-center mx-20 my-10">
            <div className="flex-grow h-px bg-text-secondary" />
            <span className="mx-4 text-text-primary text-md select-none">
                {text}
                {children}
            </span>
            <div className="flex-grow h-px bg-text-secondary" />
        </div>
    )
}

export {FormSeperator}