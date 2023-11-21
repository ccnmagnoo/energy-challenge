'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './Background.module.scss';
import { Html } from '@react-three/drei';
import { Island } from './Island';
export const Background = () => {
  return (
    <section className={styles.background_container}>
      <Canvas className={styles.canvas} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Html>loading 3D model...</Html>}>
          <Island></Island>
        </Suspense>
      </Canvas>
    </section>
  );
};
