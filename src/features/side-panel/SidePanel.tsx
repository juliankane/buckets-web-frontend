import { SidePanelItem } from "./SidePaneItem";
import { Logo } from "@assets/index";
import { safeClick } from "@utils/safeClick";

import {
  Bars3Icon,
  EllipsisHorizontalIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useUserStore } from '../../store/userStore'; // adjust path as needed


export function SidePanel() {
  const [showPanel, setShowPanel] = useState(true);
  const togglePanel = () => setShowPanel(!showPanel);
  
  const user = useUserStore((state) => state.user);




  return (
    <>
      {/* Sidebar container*/}
      <div
        id="left"
        className={`
          flex justify-between flex-col text-nowrap flex-shrink-0 transition-all duration-300 ease-in-out 
          bg-background-rich border-r-3 border-border 
          ${showPanel ? 'w-64' : 'w-20 border-border/30'}
          h-screen
          overflow-hidden
        `}  style={{transitionProperty: 'width, padding',
        }}
      >
        <div className="p-5 items-center h-16">
          <button
        className="rounded-full hover:bg-bucket-aqua-bright hover:text-white transition ease-out hover:cursor-pointer"
        onClick={togglePanel}
          >
        <Bars3Icon className="w-10 h-10 " />
          </button>
        </div>

        <div
          className={`flex-grow h-screen px-2 py-3 space-y-2`}
          style={{
        scrollbarGutter: 'stable both-edges',
        transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        paddingLeft: showPanel ? '0.5rem' : '0.25rem',
        paddingRight: showPanel ? '0.5rem' : '0.25rem',
          }}
        >
          <>
        {/* Expanded Content */}
        {showPanel ? (
          <>
            {/* Group 1 */}
            <div className="mb-6">
          <SidePanelItem
            to="dashboard"
            leftIcon={<Squares2X2Icon className="w-12 h-12 stroke-black" />}
            rightIcon={
              <button
            className="hover:bg-text-muted hover:text-white rounded-full transiton ease-out"
            onClick={safeClick(() => {
              console.log("Ellipsis clicked");
            })}
              >
            <EllipsisHorizontalIcon className="w-8 h-8 " />
              </button>
            }
          >
            Dashboard
          </SidePanelItem>

          <SidePanelItem
            to="buckets"
            leftIcon={<Logo className=" w-12 h-12 stroke-black" />}
            rightIcon={
              <button
            className="hover:bg-text-muted hover:text-white rounded-full transition ease-out"
            onClick={safeClick(() => {
              console.log("Ellipsis clicked");
            })}
              >
            <EllipsisHorizontalIcon className="w-8 h-8 " />
              </button>
            }
          >
            Buckets
          </SidePanelItem>
            </div>
          </>
        ) : (
          <>
            {/* Collapsed Content - Icon Only */}
            <SidePanelItem to="dashboard" type="icon" leftIcon={<Squares2X2Icon className="w-12 h-12 text-gray-700" />} />
            <SidePanelItem to="buckets" type="icon" leftIcon={<Logo className="w-12 h-12 text-gray-700" />} />
          </>
        )}
          </>
        </div>
        {/* Panel Footer */}



        {showPanel ? (
          <>
        <SidePanelItem
          to="profile"
          type="icon"
          leftIcon={<UserCircleIcon className="w-12 h-12 text-gray-700" />}
        >
          {user?.name ?? "Guest"}
        </SidePanelItem>
          </>
        ) : (
          <>
        <SidePanelItem
          to="profile"
          type="icon"
          leftIcon={<UserCircleIcon className="w-12 h-12 text-gray-700" />}
        />
          </>
        )}
      </div>
    </>
  );
}
