'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import * as THREE from 'three';

export default function RobotModel() {
     const { scene } = useGLTF('/models/robot.glb');

     useEffect(() => {
          scene.traverse((child) => {
               if ((child as THREE.Mesh).isMesh) {
                    child.castShadow = false;
                    child.receiveShadow = false;
               }
          });
     }, [scene]);

     return <primitive object={scene} scale={1.2} position={[0, -1, 0]} />;
}

useGLTF.preload('/models/robot.glb');