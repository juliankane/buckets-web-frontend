
import {  BellIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { useState, useRef } from 'react';
import { useClickOutside } from '@hooks/useClickOutside';
import { Logo } from '@assets/index';






export const NotificationMenu: FC = () => {

    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useClickOutside([menuRef, buttonRef], () => setOpen(false));

    return (
        <div className="relative inline-block">
            <button ref={buttonRef} onClick={() => setOpen((prev) => !prev)} 
                   className={`size-14 rounded-full flex items-center justify-center hover:cursor-pointer ease-linear ${
                      open ? "bg-bucket-aqua" : "hover:bg-black-warm"
                    }`}>
                <BellIcon  className={`size-12 text-text-primary ${open && "fill-bucket-yellow !hover:e"}`} />
            </button>

            {open && (
                <div
                  ref={menuRef}
                  className="absolute right-0 mt-6 w-64 rounded-lg shadow-black/20 z-10
                            shadow-[10px_0px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex justify-between space-x-2 p-3 max-size-[10px] border-b border-black">
                    <span>notifications</span>
                    <Logo className="w-6 h-6 rotate-180" />
                  </div>

                  <ul className="space-y-2 p-3">
                    {[
                      { notification: 'Testing notification menu items' },
                      { notification: 'Future: Notification component type' },

                    ].map(({ notification }, idx, arr) => (
                      <div className={`block w-full text-left px-4 py-2 hover:bg-gray-100  
                        ${idx !== arr.length - 1 ? "border-b border-black-warm" : ""}`}
                        key={notification}
                      >
                        {notification}
                      </div>
                    ))}
                  </ul>
                </div>
            )}
        </div>
    )


}