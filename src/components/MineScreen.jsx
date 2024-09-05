import React from "react";
import { motion } from "framer-motion";

const MineScreen = () => {
  const cards = [
    {
      id: 1,
      tier: "Platinum",
      minAmount: "100K",
      img: "/path/to/platinum.png",
    },
    { id: 2, tier: "Silver", minAmount: "28K", img: "/path/to/silver.png" },
    { id: 3, tier: "Epic", minAmount: "2M", img: "/path/to/epic.png" },
    { id: 4, tier: "Diamond", minAmount: "1M", img: "/path/to/diamond.png" },
    { id: 5, tier: "Gold", minAmount: "1M", img: "/path/to/gold.png" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen flex flex-col justify-between p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center flex-col space-y-4"
      >
        <div className="text-center text-white font-bold text-lg">
          Boost your profits
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-500 text-white py-2 px-4 rounded-full"
        >
          Start mining
        </motion.button>
      </motion.div>

      <div className="mt-2 mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 rounded-lg p-4 text-center text-white"
          >
            <img
              src={card.img}
              alt={card.tier}
              className="w-full h-40 object-contain"
            />
            <div className="mt-2 text-xl font-semibold">{card.tier}</div>
            <div className="text-sm text-gray-400">from {card.minAmount}</div>
            <div className="mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-purple-600 my-1 rounded-full h-2.5 w-full"
                ></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="h-12"></div>
    </div>
  );
};

export default MineScreen;
