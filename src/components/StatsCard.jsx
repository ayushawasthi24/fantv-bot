import React from "react";

const StatsCard = ({ profitPerTap, coinsToLevelUp, profitPerHour }) => {
  return (
    <div className="flex justify-around bg-gray-900 text-white py-4">
      <div className="flex flex-col items-center">
        <span>Profit per tap</span>
        <span className="text-yellow-400">${profitPerTap}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>Coins to level up</span>
        <span className="text-yellow-400">{coinsToLevelUp}K</span>
      </div>
      <div className="flex flex-col items-center">
        <span>Profit per hour</span>
        <span className="text-yellow-400">${profitPerHour}</span>
      </div>
    </div>
  );
};

export default StatsCard;
