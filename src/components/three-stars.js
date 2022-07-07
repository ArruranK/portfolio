import * as THREE from 'three'
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import { MousePos } from '../hooks';

const ThreeStars = () => {
  const ref = useRef(null);
  const position = MousePos();

  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 3.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    if (typeof window !== `undefined`) {
      state.camera.position.lerp(new THREE.Vector3().set(1-(position.x/window.innerWidth), (position.y/window.innerHeight), 2), 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent={true} color="#338588" size={0.013} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

export default ThreeStars;