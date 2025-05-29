import { SidePanelItem } from "./SidePaneItem";
import { Logo } from "@assets/index";
import { safeClick } from "@utils/safeClick";
import {
  Bars3Icon,
  EllipsisHorizontalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export function SidePanel() {
  const [showPanel, setShowPanel] = useState(true);
  const togglePanel = () => setShowPanel(!showPanel);

  return (
    <>
  {/* Sidebar container including the toggle button */}
  <div
    id="left"
    className={`
      flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out bg-background-rich border-r-2 border-border
      ${showPanel ? 'w-64' : 'w-16'}
    `}
  >
    {/* Toggle Button - always visible */}
    <div className="p-2">
      <button
        className="rounded-full hover:bg-bucket-aqua/20 hover:cursor-pointer"
        onClick={togglePanel}
      >
        <Bars3Icon className="w-10 h-10 text-black" />
      </button>
    </div>

    {/* Sidebar content - only shown when expanded */}
    <div
      className={`
        flex-grow overflow-y-auto transition-opacity duration-200
        ${showPanel ? 'opacity-100 px-5 pt-1 space-y-4' : 'opacity-0 w-0 h-0 overflow-hidden'}
      `}
    >
      <SidePanelItem
        to="dashboard"
        leftIcon={<Squares2X2Icon className="w-6 h-6 text-gray-700" />}
        rightIcon={
          <button
            className="hover:bg-bucket-aqua/20 rounded-full"
            onClick={safeClick(() => {
              console.log("Ellipsis clicked");
            })}
          >
            <EllipsisHorizontalIcon className="w-6 h-6 text-text-primary " />
          </button>
        }
      >
        Dashboard
      </SidePanelItem>

      <SidePanelItem
        to="buckets"
        leftIcon={<Logo className="rotate-12" />}
        rightIcon={
          <button
            className="hover:bg-bucket-aqua/20 rounded-full"
            onClick={safeClick(() => {
              console.log("Ellipsis clicked");
            })}
          >
            <EllipsisHorizontalIcon className="w-6 h-6 text-text-primary " />
          </button>
        }
      >
        Buckets
      </SidePanelItem>
    </div>
  </div>
</>

  );
}
