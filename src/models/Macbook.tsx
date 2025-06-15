import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { Group, Mesh, MeshStandardMaterial, RepeatWrapping } from 'three';

export const Macbook = () => {
  const { scene } = useGLTF('/models/macbook/scene.gltf');
  const texture = useTexture('/models/macbook/MacBookPro_baseColor.jpeg');

  const sceneRef = useRef<Group>(scene);

  // Adjust texture properties
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.offset.set(0, 0);
  texture.rotation = 0;
  texture.flipY = false;

  // Traverse through all meshes in the scene to apply material
  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.material = new MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 0,
      });
      mesh.material.needsUpdate = true;
    }
  });

  // Animate the model's rotation
  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = state.clock.getElapsedTime() / 2;
    }
  });

  return (
    <>
      <motion.group
        position={[1.4, -0.4, -0.4]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.0 }}
        exit={{ opacity: 0 }}
        onUpdate={(latest) => {
          scene.traverse((child) => {
            if ((child as Mesh).isMesh) {
              const mesh = child as Mesh;
              if (mesh.material instanceof MeshStandardMaterial) {
                mesh.material.opacity =
                  typeof latest.opacity === 'number'
                    ? latest.opacity
                    : parseFloat(latest.opacity);
              }
            }
          });
        }}
      >
        <primitive object={scene} ref={sceneRef} scale={8} />
      </motion.group>

      {/* Orbit controls for camera interaction */}
      {/* <OrbitControls
        target={[1.4, -0.4, -0.4]}
        minDistance={5}
        maxDistance={20}
      /> */}
    </>
  );
};

useGLTF.preload('/models/macbook/scene.gltf');
