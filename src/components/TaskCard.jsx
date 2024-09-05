import React from "react";
import { BsCoin, BsCalendar } from "react-icons/bs";

const TaskCard = ({ icon, title, reward }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg my-2">
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-white">{title}</span>
      </div>
      <div className="flex items-center space-x-2 text-yellow-400">
        <BsCoin />
        <span>{reward}</span>
      </div>
      <BsCalendar className="text-gray-500" />
    </div>
  );
};

export default TaskCard;
