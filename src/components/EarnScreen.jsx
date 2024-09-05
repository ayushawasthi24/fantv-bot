import React, { useState } from "react";
import TaskCard from "./TaskCard";
import DailyRewards from "./DailyRewards";
import {
  BsCoin,
  BsCalendar,
  BsShield,
  BsGift,
  BsGraphUp,
} from "react-icons/bs";

const EarnScreen = () => {
  const [showRewards, setShowRewards] = useState(false);

  const toggleRewards = () => setShowRewards(!showRewards);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen p-4">
      <div className="text-center text-yellow-400 text-3xl mb-6">
        <BsCoin className="w-16 h-16 mx-auto mb-4" />
        Earn more coins
      </div>

      <h3 className="text-white text-lg mb-4">Daily tasks</h3>
      <div onClick={toggleRewards}>
        <TaskCard
          icon={<BsCalendar className="text-white text-2xl" />}
          title="Tasks list"
          reward="6,849,000"
        />
      </div>

      <h3 className="text-white text-lg mt-8 mb-4">Tasks List</h3>
      <TaskCard
        icon={<BsShield className="text-white text-2xl" />}
        title="Tasks list"
        reward="6,849,000"
      />
      <TaskCard
        icon={<BsGift className="text-white text-2xl" />}
        title="Tasks list"
        reward="6,849,000"
      />
      <TaskCard
        icon={<BsGraphUp className="text-white text-2xl" />}
        title="Tasks list"
        reward="6,849,000"
      />

      {showRewards && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <DailyRewards onClose={toggleRewards} />
        </div>
      )}
    </div>
  );
};

export default EarnScreen;
