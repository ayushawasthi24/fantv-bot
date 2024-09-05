import React, { useEffect, useState } from "react";
import { GiElephant } from "react-icons/gi";
import { BsCoin } from "react-icons/bs";

const AvatarSection = ({ coinCount, level, avatarImage, progress, energy }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 200);
  }, [progress]);

  return (
    <div className="text-center text-white py-10">
      <div className="text-6xl"></div>
      <div className="text-yellow-400 text-3xl mb-2">
        <span className="flex items-center justify-center space-x-2">
          <BsCoin />
          <span>{coinCount}</span>
        </span>
      </div>
      <div className="flex justify-center items-center">
        <span>Bronze</span>
        <span className="ml-2">Level {level}/9</span>
      </div>
      <div className="bg-gray-800 rounded-full h-2 mt-2 w-10/12 mx-auto">
        <div
          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
          style={{ width: `${animatedProgress}%` }}
        ></div>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <span>{energy} / 10000</span>
        <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 hover:scale-105 transform transition-transform duration-200 ease-in-out active:scale-95">
          Boost
        </button>
      </div>
    </div>
  );
};

export default AvatarSection;
