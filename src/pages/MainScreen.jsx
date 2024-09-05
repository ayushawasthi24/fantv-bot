import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import ExchangeScreen from "../components/ExchangeScreen";
import MineScreen from "../components/MineScreen";
import FriendsScreen from "../components/FriendsScreen";
import EarnScreen from "../components/EarnScreen";
import AirdropScreen from "../components/AirdropScreen";

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState("Exchange");

  const renderContent = () => {
    switch (activeTab) {
      case "Exchange":
        return <ExchangeScreen />;
      case "Mine":
        return <MineScreen />;
      case "Friends":
        return <FriendsScreen />;
      case "Earn":
        return <EarnScreen />;
      case "Airdrop":
        return <AirdropScreen />;
      default:
        return <Exchange />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 h-full flex flex-col justify-between">
      <div className="flex-grow">{renderContent()}</div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainScreen;
