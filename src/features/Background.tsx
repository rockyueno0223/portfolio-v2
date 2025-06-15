import { Sphere, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background = () => {
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const color = useRef({
    color: '#0a0a0a', // Background color in hero section
  });
  const tl = useRef<gsap.core.Timeline | null>(null);

  const data = useScroll();

  useFrame(() => {
    if (!tl.current || !material.current) return;

    tl.current.progress(data.offset);
    material.current.color = new THREE.Color(color.current.color);
  });

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(color.current, {
      color: '#002e63', // Background color in about section
    });
    tl.current.to(color.current, {
      color: '#EFC98C', // Background color in work section
    });
    tl.current.to(color.current, {
      color: '#fda4af', // Background color in contact section
    });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
