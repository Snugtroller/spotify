"use client";
import React, { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

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
        <button onClick={handleBackward} className="ml-4 mt-4">
          <ArrowLeftCircleIcon className="text-white h-10 hover:opacity-75 transition" />
        </button>

        <button onClick={handleForward}>
          <ArrowRightCircleIcon className="text-white h-10 hover:opacity-75 transition" />
        </button>
      </div>
    </>
  );
};

export default MainContent;
