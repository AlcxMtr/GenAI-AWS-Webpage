import React from 'react';
import { BsLightningChargeFill } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";


const MainContent = () =>  {return (
  <div className="flex">
    <div className="flex-1"></div>
    <div className="flex w-2/3 flex-col h-screen items-center justify-center text-center gap-8">
      <div className="flex items-center border border-black rounded-full gap-1 py-1.5 px-3">
        <div>New Snippets</div>
        <BsLightningChargeFill className="text-yellow-500"/>
        <div>Read More</div>
        <IoArrowForward />
      </div>
      <div className="text-black text-6xl font-bold tracking-wide">
        Collection of modern, <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">background snippets</span>
      </div>
      <div className="text-gray-500">
        Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center rounded-md bg-black py-2 px-4 gap-1">
          <div className="text-white">Go to GitHub</div>
          <IoArrowForward className="text-white"/>
        </div>
        <div className="rounded-md bg-gray-100 py-2 px-4">Reset background</div>
      </div>
    </div>
    <div className="flex-1"></div>
  </div>
  );
};

const App = () => {
  return (
    <div className="relative">
      <div className="h-screen grid grid-cols-12 grid-rows-6 gap-0">
        {Array.from({ length: 72 }, (_, index) => (
          <div key={index} className="border border-gray-100"></div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <MainContent/>
      </div>
    </div>
  );
};

export default App;