import React from "react";
import { FaUserFriends, FaBitcoin, FaGift } from "react-icons/fa";

const BottomNav = ({ activeTab, setActiveTab }) => {
  const getButtonClasses = (tabName) => {
    return `flex flex-col items-center px-3 py-1 rounded-lg transition-all duration-200 ease-in-out ${
      activeTab === tabName
        ? "bg-yellow-500 text-black scale-105"
        : "hover:text-yellow-400 hover:scale-110 text-white"
    }`;
  };

  return (
    <div className="bg-gray-900 text-white fixed bottom-0 left-0 w-full flex justify-around py-3">
      <button
        className={getButtonClasses("Exchange")}
        onClick={() => setActiveTab("Exchange")}
      >
        <img src="./icons/Exchange.png" alt="" className="w-6 h-6" />
        <span>Exchange</span>
      </button>
      <button
        className={getButtonClasses("Mine")}
        onClick={() => setActiveTab("Mine")}
      >
        <FaBitcoin className="w-6 h-6 mb-1" />
        <span>Mine</span>
      </button>
      <button
        className={getButtonClasses("Friends")}
        onClick={() => setActiveTab("Friends")}
      >
        <FaUserFriends className="w-6 h-6 mb-1" />
        <span>Friends</span>
      </button>
      <button
        className={getButtonClasses("Earn")}
        onClick={() => setActiveTab("Earn")}
      >
        <FaGift className="w-6 h-6 mb-1" />
        <span>Earn</span>
      </button>
      <button
        className={getButtonClasses("Airdrop")}
        onClick={() => setActiveTab("Airdrop")}
      >
        <img src="./icons/Airdrop.png" alt="" className="w-6 h-6" />
        <span>Airdrop</span>
      </button>
    </div>
  );
};

export default BottomNav;
