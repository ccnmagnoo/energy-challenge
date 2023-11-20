import { useLoader } from '@react-three/fiber';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Island = (props: {}) => {
  const { nodes, materials } = useGLTF('/low_poly_island.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[-0.884, 0.257, 1.805]} rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-0.285, -4.229, 2.516]}
          rotation={[-0.103, -0.306, -2.911]}
          scale={0.425}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material-material'].geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_004-material'].geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_005-material'].geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_006-material'].geometry}
            material={materials['Material.006']}
          />
        </group>
        <group
          position={[6.16, -3.999, 3.419]}
          rotation={[-0.222, -0.111, 2.925]}
          scale={0.168}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[5.391, -5.353, 3.388]}
          rotation={[-0.05, -0.192, 0.804]}
          scale={0.168}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_1'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_1'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[-4.052, 0.78, 2.228]}
          rotation={[-0.021, -0.121, 3.084]}
          scale={0.419}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material-material_1'].geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_004-material_1'].geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_005-material_1'].geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_006-material_1'].geometry}
            material={materials['Material.006']}
          />
        </group>
        <group
          position={[8.799, -0.263, 4.747]}
          rotation={[0.081, -0.183, -2.97]}
          scale={0.175}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_2'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_2'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[8.703, -0.833, 4.347]}
          rotation={[0.004, -0.205, 3.066]}
          scale={0.128}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_3'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_3'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[5.385, 8.645, 3.911]}
          rotation={[-0.013, -0.022, 2.202]}
          scale={0.175}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_4'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_4'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[5.891, 7.681, 4.015]}
          rotation={[-0.063, -0.204, 2.979]}
          scale={0.128}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_5'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_5'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[5.327, 7.997, 3.763]}
          rotation={[0.117, 0.012, -2.699]}
          scale={0.128}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_6'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_6'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[3.003, 0.26, 2.775]}
          rotation={[0.27, 0.035, -0.733]}
          scale={0.316}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material-material_2'].geometry}
            material={materials.Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_004-material_2'].geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_005-material_2'].geometry}
            material={materials['Material.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_006-material_2'].geometry}
            material={materials['Material.006']}
          />
        </group>
        <group
          position={[-0.248, 1.873, 2.999]}
          rotation={[0.089, -0.195, 1.416]}
          scale={0.157}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_7'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_7'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[-1.584, 7.241, 2.458]}
          rotation={[-0.035, -0.121, 1.039]}
          scale={0.185}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_8'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_8'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[-2.261, 6.909, 2.441]}
          rotation={[0.322, 0.045, 1.794]}
          scale={0.139}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_9'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_9'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <group
          position={[5.163, -4.212, 3.155]}
          rotation={[0.041, -0.332, 1.361]}
          scale={0.138}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_007-material_10'].geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Material_008-material_10'].geometry}
            material={materials['Material.008']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Material_002-material'].geometry}
          material={materials['Material.002']}
          position={[3.785, 1.865, 0.305]}
          rotation={[-0.005, -0.026, -2.087]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Material_001-material'].geometry}
          material={materials['Material.001']}
          position={[3.505, 2.009, 1.695]}
          rotation={[-0.005, -0.026, -2.087]}
          scale={12.565}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Material_003-material'].geometry}
          material={materials['Material.003']}
          position={[1.396, 5.775, 8.151]}
          scale={0.674}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/low_poly_island.glb');
