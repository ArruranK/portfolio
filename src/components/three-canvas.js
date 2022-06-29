import React from 'react';

import { Canvas } from '@react-three/fiber';

import ThreeStars from './three-stars';

const ThreeCanvas = ({ isDark }) => {

  return (
    <Canvas
      gl={{ antialias: false, alpha: false }}
      camera={{
        position: [0, 0, 1]
      }}
    >
      {
        isDark ? <color attach="background"/> : <></>
      }
      
      <ThreeStars />
    </Canvas>
  );
};

export default ThreeCanvas;