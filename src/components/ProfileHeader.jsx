import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ProfileHeader = ({ username, role }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <FaUserCircle className="text-4xl" />
        <div className="ml-3">
          <h2 className="text-lg font-bold">{username}</h2>
          <p className="text-sm">{role}</p>
        </div>
      </div>
      <button className="bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-500">
        Choose Exchange
      </button>
    </div>
  );
};

export default ProfileHeader;
