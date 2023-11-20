import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Island = () => {
  const island = useGLTF('/low_poly_island.glb');
  const islandRef = useRef();

  return <div>Island</div>;
};
