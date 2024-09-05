import React from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";

const AirdropScreen = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen p-4">
      {/* Airdrop Icon */}
      <div className="flex justify-center mb-6">
        <img
          src="./icons/Airdrop.png"
          alt="Airdrop Icon"
          className="w-24 h-24"
        />
      </div>

      {/* Title */}
      <div className="text-center text-white text-2xl mb-2">
        Prepare ¡Airdrop coming soon!
      </div>

      {/* Checklist */}
      <div className="text-white space-y-4 mt-6">
        <div className="flex items-center justify-center space-x-4">
          <BsCheckCircle className="text-green-500 text-2xl" />
          <p>Negotiations on the stock exchanges</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <BsCheckCircle className="text-green-500 text-2xl" />
          <p>Negotiations with market creators</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <BsCheckCircle className="text-green-500 text-2xl" />
          <p>Key associates</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <BsCircle className="text-gray-500 text-2xl" />
          <p>Airdrop tasks</p>
        </div>
      </div>
    </div>
  );
};

export default AirdropScreen;
