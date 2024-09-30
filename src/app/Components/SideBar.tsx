"use client"; // For Next.js Client Component

import React from "react";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  SignalIcon,
} from "@heroicons/react/24/solid"; // Ensure this import is correct

export default function SideBar() {
  return (
    <div>
      <div className="bg-zinc-800 w-60 h-32 ml-5 rounded-lg">
        <div className="flex items-center mt-5 ml-5">
          <button className="flex items-center space-x-2 mt-3 hover:opacity-50 transition ">
            <HomeIcon className="h-5 w-5 text-gray-400 " />
            <div className="text-gray-400 ">Home</div>
          </button>
        </div>

        <div className="flex items-center mt-4 ml-5">
          <button className="flex items-center space-x-2  hover:opacity-50 transition">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            <div className="text-gray-400">Search</div>
          </button>
        </div>

        <div className="flex items-center mt-4 ml-5">
          <button className="flex items-center space-x-2  hover:opacity-50 transition">
            <BuildingLibraryIcon className="h-5 w-5 text-gray-400" />
            <div className="text-gray-400">Your Library</div>
          </button>
        </div>
      </div>

      <div className="bg-zinc-800 w-60 h-32 ml-5 rounded-lg">
        <div className="flex items-center mt-2 ml-5">
          <button className="flex items-center space-x-2 mt-3  hover:opacity-50 transition">
            <PlusCircleIcon className="h-5 w-5 text-gray-400" />
            <div className="text-gray-400">Create Playlist</div>
          </button>
        </div>

        <div className="flex items-center mt-4 ml-5">
          <button className="flex items-center space-x-2  hover:opacity-50 transition">
            <HeartIcon className="h-5 w-5 text-gray-400" />
            <div className="text-gray-400">Liked Songs</div>
          </button>
        </div>

        <div className="flex items-center mt-4 ml-5">
          <button className="flex items-center space-x-2  hover:opacity-50 transition">
            <SignalIcon className="h-5 w-5 text-gray-400" />
            <div className="text-gray-400">Your Episodes</div>
          </button>
        </div>
      </div>

      <div className="bg-zinc-800 w-60 ml-5 rounded-lg ">
        <div className="mt-2 text-gray-400 ml-5  hover:opacity-50 transition">
          Playlist Name
        </div>
        <div className="mt-5 text-gray-400 ml-5  hover:opacity-50 transition">
          Playlist Name
        </div>
        <div className="mt-5 text-gray-400 ml-5  hover:opacity-50 transition">
          Playlist Name
        </div>
        <div className="mt-5 text-gray-400 ml-5  hover:opacity-50 transition">
          Playlist Name
        </div>
        <div className="mt-5 text-gray-400 ml-5  hover:opacity-50 transition5">
          Playlist Name
        </div>
        <div className="mt-5 text-gray-400 ml-5  hover:opacity-50 transition5">
          Playlist Name
        </div>
      </div>
    </div>
  );
}
