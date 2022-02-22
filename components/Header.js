import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import GroupIcon from "@mui/icons-material/Group";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
      {/* left side  */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src="/logo-blue.svg" alt="logo-white" width={45} height={45} />

        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>

      {/* right side  */}
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
        <HeaderLink Icon={GroupIcon} text="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} text="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />
      </div>

      {/* Dark mode toggle */}

      <div
        className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative `}
      >
        <span className="absolute left-0">🌜</span>
        <div className="w-5 h-5 bg-white rounded-full z-40" layout />

        <span className="absolute right-0.5">🌞</span>
      </div>
    </header>
  );
};

export default Header;
