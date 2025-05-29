

import { UserCircleIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useState, useRef } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';

export const ProfileMenu: FC = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);


    useClickOutside([menuRef, buttonRef], () => setOpen(false));

    return (
        <div className="relative inline-block">
            <button
                ref={buttonRef}
                onClick={() => setOpen((prev) => !prev)}
                className="size-auto rounded-full flex items-center justify-center shadow  hover:cursor-pointer"
            >
                <UserCircleIcon className="size-12 text-gray-600" />
            </button>

            {open && (
                <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10">
                    <ul className="py-1">
                        <li>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                    // Open Profile modal logic here
                                    setOpen(false);
                                }}
                            >
                                Profile
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                    // Open Settings modal logic here
                                    setOpen(false);
                                }}
                            >
                                Settings
                            </button>
                        </li>
                        <li>
                            <button
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                onClick={() => {
                                    // Open Logout modal logic here
                                    setOpen(false);
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>  );
};