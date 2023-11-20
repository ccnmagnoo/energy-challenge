import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './Background.module.scss';
import { Html } from '@react-three/drei';
export const Background = () => {
  return (
    <section>
      <Canvas className={styles.canvas} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Html>loading 3D model...</Html>}></Suspense>
      </Canvas>
    </section>
  );
};
