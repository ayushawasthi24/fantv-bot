import React from "react";
import { BsGift, BsTelegram, BsPlus, BsLink } from "react-icons/bs";

const FriendsScreen = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-screen p-4">
      <div className="text-center text-white text-2xl mb-6">
        ¡Invite your friends!
      </div>
      <p className="text-center text-gray-400 mb-8">
        You and your friend will receive a bonus
      </p>

      <div className="space-y-4">
        {/* Invite Friend Card */}
        <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BsGift className="text-yellow-400 text-2xl" />
            <div>
              <p className="text-white font-bold">Invite friend</p>
              <p className="text-yellow-400">+5,000 for you and your friend</p>
            </div>
          </div>
        </div>

        {/* Invite on Telegram Premium Card */}
        <div className="bg-gray-800 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <BsTelegram className="text-blue-400 text-2xl" />
            <div>
              <p className="text-white font-bold">
                Invite friend on Telegram Premium
              </p>
              <p className="text-yellow-400">+25,000 for you and your friend</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 p-4 rounded-lg text-center text-gray-400">
        You still have not invited friends
      </div>

      <div className="mt-4 flex items-center justify-center space-x-4">
        <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700">
          <BsPlus />
          <span>Invite a friend</span>
        </button>
        <button className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700">
          <BsLink />
        </button>
      </div>
    </div>
  );
};

export default FriendsScreen;
