import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import StatsCard from "./StatsCard";
import AvatarSection from "./AvatarSection";

const ExchangeScreen = () => {
  const [coinCount, setCoinCount] = useState(101);
  const [isSlapped, setIsSlapped] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1000);
  const totalFrames = 230; // Total frames from 1000 to 1229 images
  const fps = 30; // Frames per second

  useEffect(() => {
    let animationId;
    if (isSlapped) {
      // Start the animation when the character is slapped
      animationId = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          if (prevFrame < 1229) {
            return prevFrame + 1;
          } else {
            setIsSlapped(false);
            return 1000; // Reset to the first frame
          }
        });
      }, 1000 / fps);
    }
    return () => clearInterval(animationId);
  }, [isSlapped]);

  const handleSlap = () => {
    setIsSlapped(true);
    setCoinCount((prev) => prev + 1); // Increase coin count on slap
  };

  return (
    <div>
      <ProfileHeader username="username" role="CEO" />
      <StatsCard profitPerTap="1" coinsToLevelUp="5K" profitPerHour="1" />
      <div className="mt-2 flex flex-col items-center ">
        <div className="relative w-full max-w-screen-md mb-2">
          <img
            src={`/compressedImages/${currentFrame}.png`}
            alt="Character"
            className="w-full h-auto object-contain"
            onClick={handleSlap}
          />
        </div>
        <AvatarSection
          coinCount={coinCount.toString()}
          level="1"
          avatarImage="elephant-avatar.png"
          progress="30"
          energy="1000"
        />
      </div>
    </div>
  );
};

export default ExchangeScreen;
