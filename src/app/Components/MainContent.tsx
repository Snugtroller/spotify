"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Liked from "../../liked.jpg";
import Play from "../../play.png";

const MainContent = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleForward = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(`Forward: ${items[currentIndex + 1]}`);
    } else {
      console.log("Already at the last item.");
    }
  };

  const handleBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(`Backward: ${items[currentIndex - 1]}`);
    } else {
      console.log("Already at the first item.");
    }
  };

  return (
    <>
      <div className="mt-5 bg-zinc-800 h-[550px] w-[900px] rounded-lg bg-gradient-to-b from-emerald-800 via-zinc-800 to-zinc-800    ">
        <div className="flex items-center">
          <button onClick={handleBackward} className="ml-4 mt-4">
            <ArrowLeftCircleIcon className="text-white h-10 hover:opacity-75 transition" />
          </button>

          <button onClick={handleForward}>
            <ArrowRightCircleIcon className="text-white h-10 hover:opacity-75 transition mt-4" />
          </button>
          <div className="ml-[550px] text-white mt-4">Sign up</div>
          <div className="ml-[50px] text-black mt-4 bg-white h-[30px] w-[70px] flex items-center justify-center rounded-[70px] font-bold">
            <a className="text-center">Login</a>
          </div>
        </div>
        <div className="text-white font-bold text-[25px] mt-[10px] ml-5">
          Welcome Back
        </div>
        <div className="backdrop-blur-md bg-white/30 h-[60px] w-[250px] ml-5 mt-5 rounded-lg">
          <Image className="h-[60px] w-[70px]" src={Liked} alt="Liked" />
          <div className="ml-[90px] mt-[-45px] flex-1 content-center  text-white">
            Liked Songs
          </div>
          <Image
            src={Play}
            className="w-[40px] ml-[190px] mt-[-30px] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MainContent;
