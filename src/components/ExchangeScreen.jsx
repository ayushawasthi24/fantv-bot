import React, { useState, useEffect, useRef } from "react";
import ProfileHeader from "./ProfileHeader";
import StatsCard from "./StatsCard";
import AvatarSection from "./AvatarSection";

const ExchangeScreen = () => {
  const [coinCount, setCoinCount] = useState(101);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1000);
  const [clicks, setClicks] = useState(0);
  const clickTimestamps = useRef([]);

  const totalFrames = 230; // Frames from 1000 to 1229
  const lightSlapFrames = 20; // Play 10 frames for a light slap
  const fullAnimationStart = 1000;
  const fullAnimationEnd = 1229;
  const fps = 30; // Frames per second
  const slapThreshold = 5; // Number of clicks required for a full slap animation
  const slapWindow = 2000; // Time window in ms to count clicks for the slap intensity

  const frameInterval = useRef(null);

  // Function to handle slaps and click intensity
  const handleSlap = () => {
    const now = Date.now();
    // Filter the clicks that are within the slapWindow
    clickTimestamps.current = clickTimestamps.current.filter(
      (timestamp) => now - timestamp < slapWindow
    );

    // Add the current timestamp
    clickTimestamps.current.push(now);

    // Update the click count based on the number of valid timestamps
    setClicks(clickTimestamps.current.length);

    // Increment the coin count on each slap
    setCoinCount((prev) => prev + 1);

    // Determine which animation to play based on the number of clicks in the window
    if (!isAnimating) {
      if (clickTimestamps.current.length >= slapThreshold) {
        // Full animation when the slap threshold is met
        startAnimation(fullAnimationStart, fullAnimationEnd);
      } else {
        // Light slap animation for slow or single clicks
        startAnimation(currentFrame, currentFrame + lightSlapFrames);
      }
    }
  };

  const startAnimation = (startFrame, endFrame) => {
    setIsAnimating(true);
    setCurrentFrame(startFrame);

    frameInterval.current = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame < endFrame) {
          return prevFrame + 1;
        } else {
          clearInterval(frameInterval.current);
          setIsAnimating(false);
          return fullAnimationStart; // Reset to the first frame
        }
      });
    }, 1000 / fps);
  };

  return (
    <div>
      <ProfileHeader username="Ayush" role="CEO" />
      <StatsCard profitPerTap="1" coinsToLevelUp="5" profitPerHour="1" />
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
