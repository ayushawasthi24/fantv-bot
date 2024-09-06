import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ profitPerTap, coinsToLevelUp, profitPerHour }) => {
  return (
    <motion.div
      className="flex justify-around bg-gray-700 text-white p-2 rounded-lg shadow-lg"
    >
      <div className="flex flex-col items-center">
        <span className="text-gray-400 text-sm">Profit per tap</span>
        <span className="text-yellow-400 text-xl font-semibold">
          ${profitPerTap}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-400 text-sm">Coins to level up</span>
        <span className="text-yellow-400 text-xl font-semibold">
          {coinsToLevelUp}K
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-gray-400 text-sm">Profit per hour</span>
        <span className="text-yellow-400 text-xl font-semibold">
          ${profitPerHour}
        </span>
      </div>
    </motion.div>
  );
};

export default StatsCard;
