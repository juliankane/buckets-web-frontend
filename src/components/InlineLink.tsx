import { FC } from "react";
import { NavLink, type LinkProps } from "react-router-dom";

type InlineLinkProps = {
    leadingText?: string | false,
    linkText?: string,
} & LinkProps



const InlineLink: FC<InlineLinkProps> = ({leadingText=false, linkText="", to="", ...rest}) => {
    return (
        <NavLink to={to} {...rest}>
            {leadingText && <span className="text-lg text-text-primary">
                {leadingText}
            </span>}
            <span className="text-lg text-link hover:underline hover:text-link-hover focus:outline-none">
                {linkText}
            </span>
        </NavLink>
    )
}


export {InlineLink as NavLink}