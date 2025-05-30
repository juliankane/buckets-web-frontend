import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type PanelItemProps = {
    children?: ReactNode;
    to: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    type?: string;
};

export const SidePanelItem: FC<PanelItemProps> = ({
    children,
    to,
    leftIcon,
    rightIcon,
}) => {
    return (
        <NavLink to={to} 
        className={({ isActive }) =>
            `w-full h-18 text-[20px] space-x-2  flex items-center rounded-lg
         hover:bg-black-warm hover:cursor-pointer max-w-xs max-h-20 
         ${isActive ? 'bg-black-warm' : ''}` }
        >
            <span className="flex items-center ml-4 w-8 h-8 justify-center">
                {leftIcon ? leftIcon : <span className="invisible w-6" />}
            </span>

            <span className="flex-1 text-left">{children}</span>

            <span className="flex items-center mr-4 w-6 justify-center hovern:">
                {rightIcon ? rightIcon : <span className="invisible w-6" />}
            </span> 

        </NavLink>
    );
};
