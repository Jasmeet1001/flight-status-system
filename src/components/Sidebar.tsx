"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { PlaneIcon } from "./ui/customIcons/icons";

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <div
        className={`bg-background border-r w-64 flex flex-col transition-all duration-300 ${
          isCollapsed ? "w-0 overflow-hidden" : "w-64"
        }`}
      >
        <div className="flex items-center h-16 px-6 border-b">
          <Link
            to="#"
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <PlaneIcon />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              Acme Inc
            </span>
          </Link>
          <button
            className="ml-auto p-2 rounded-full hover:bg-muted"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <PlaneIcon />
          </button>
        </div>
        <nav className={`flex-1 py-4 ${isCollapsed ? "hidden" : ""}`}>
          <ul className="space-y-1">
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 px-6 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {/* <HomeIcon className="w-5 h-5" /> */}
                <span className={`${isCollapsed ? "hidden" : "block"}`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 px-6 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {/* <LayoutDashboardIcon className="w-5 h-5" /> */}
                <span className={`${isCollapsed ? "hidden" : "block"}`}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 px-6 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {/* <UsersIcon className="w-5 h-5" /> */}
                <span className={`${isCollapsed ? "hidden" : "block"}`}>
                  Customers
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3 px-6 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {/* <SettingsIcon className="w-5 h-5" /> */}
                <span className={`${isCollapsed ? "hidden" : "block"}`}>
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-6" />
    </div>
  );
}
