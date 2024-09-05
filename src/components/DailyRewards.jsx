import React from "react";
import { BsCoin } from "react-icons/bs";

const DailyRewards = ({ onClose }) => {
  const days = [
    { day: "Day 1", reward: 500 },
    { day: "Day 2", reward: 1000 },
    { day: "Day 3", reward: 2500 },
    { day: "Day 4", reward: 5000 },
    // Add more days if needed
  ];

  return (
    <div className="p-6 bg-gray-900 rounded-lg mt-8 relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        &times;
      </button>
      <h2 className="text-white text-lg font-bold mb-4">Daily rewards</h2>
      <p className="text-gray-400 mb-6">
        Buy upgrades for your exchange to mine. You can win even being offline
        for 3 hours
      </p>
      <div className="grid grid-cols-3 gap-4">
        {days.map((day, index) => (
          <div key={index} className="p-3 bg-gray-800 rounded-lg text-center">
            <span className="text-white block mb-2">{day.day}</span>
            <div className="flex justify-center items-center space-x-2 text-yellow-400">
              <BsCoin />
              <span>{day.reward}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
        Claim
      </button>
    </div>
  );
};

export default DailyRewards;
