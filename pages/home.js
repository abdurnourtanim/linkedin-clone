import BusinessCenterIcon from "@mui/icons-material/BusinessCenterSharp";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

const Home = () => {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            // src="https://rb.gy/vtbzlp"
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
              sign in{" "}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
