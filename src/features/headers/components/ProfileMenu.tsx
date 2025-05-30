import { Logo } from "@assets/index"
import { FC } from 'react';
import { useState, useRef } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';
import { LogoutButton } from '@components/LogoutButton';

import { NavLink } from 'react-router-dom';

export const ProfileMenu: FC = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside([menuRef, buttonRef], () => setOpen(false));

    const handleClose = () => {setOpen(false)};

    return (
        <div className="relative inline-block">
                    <button ref={buttonRef} onClick={() => setOpen((prev) => !prev)} 
                className={`size-14 rounded-full flex items-center justify-center hover:cursor-pointer ease-linear ${
                      open ? "bg-bucket-aqua" : "hover:bg-black-warm"
                    }`}>
                <Logo className={`size-10 fill-text-secondary ${open && "fill-black !hover:e"}`} />
            </button>

            {open && (
                <div
                    ref={menuRef}
                    className="absolute right-0 mt-6 w-48 bg-white rounded-lg drop-shadow-black shadow-lg z-10"
                >
                    <ul className="py-1">
                        {[
                            { to: 'profile', label: 'Profile' },
                            { to: 'settings', label: 'Settings' },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} onClick={handleClose} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <LogoutButton className="block w-full text-left px-4 py-2 hover:bg-gray-100"/> 
                    </ul>
                </div>
            )}
        </div>
    );
};
