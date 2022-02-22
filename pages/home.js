import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenterSharp";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import HeaderLink from "../components/HeaderLink";

const Home = () => {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>LinkedIn - Login</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image src="/logo.png" layout="fill" objectFit="contain" alt="logo" />
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

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image
            src="/linkedin-home.svg"
            layout="fill"
            priority
            alt="linkedin-home"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
