import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Model = ({ onClick }) => {
  const { scene, animations } = useGLTF("./tom.glb");

  const modelRef = useRef();
  const mixerRef = useRef();
  const [actions, setActions] = useState([]);

  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Audio("./sound.mp3");
  }, []);

  if (animations && animations.length > 0 && !mixerRef.current) {
    mixerRef.current = new THREE.AnimationMixer(scene);
    const animationActions = animations.map((clip) =>
      mixerRef.current.clipAction(clip)
    );
    setActions(animationActions);
  }

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });
  const playAction = (action) => {
    if (action) {
      action.reset();
      action.play();

      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
      action.paused = false;
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={scene}
      onClick={() => {
        if (actions[1]) {
          playAction(actions[1]);
        }
        if (soundRef.current) {
          soundRef.current.play();
        }
      }}
      onDoubleClick={() => {
        if (actions[2]) {
          playAction(actions[2]);
        }
        if (soundRef.current) {
          soundRef.current.play();
        }
      }}
      // onPointerOver={() => {
      //   if (actions[2]) {
      //     playAction(actions[2]); // Play animations[2] on hover
      //   }
      //   onHover();
      // }}
      // onPointerOut={() => {
      //   if (actions[3]) {
      //     playAction(actions[3]); // Play animations[3] on mouse out
      //   }
      // }}
      scale={1.5}
    />
  );
};

const ModelViewer = () => {
  const handleClick = () => {
    console.log("Model clicked!");
  };

  const handleDoubleClick = () => {
    console.log("Model double-clicked!");
  };

  const handleHover = () => {
    console.log("Model hovered!");
  };

  return (
    <div className="h-screen w-auto flex items-center justify-center mt-8">
      <Canvas camera={{ position: [0, 2, 15], fov: 50, zoom: 1.5 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} />
        <Model
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onHover={handleHover}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
