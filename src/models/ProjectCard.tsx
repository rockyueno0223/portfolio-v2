import { Image, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import { ProjectType } from '../assets/projectData';

interface ProjectCardProps {
  project: ProjectType;
  highlighted: boolean;
  [key: string]: any; // Allow additional props
}

export const ProjectCard = ({
  project,
  highlighted,
  ...props
}: ProjectCardProps) => {
  const background = useRef<Mesh>(null);
  const bgOpacity = useMotionValue(0.4); // Initial opacity

  // Update opacity when `highlighted` state changes
  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.9 : 0.4);
  }, [highlighted]);

  // Run every frame to update material opacity
  useFrame(() => {
    if (!background.current) return;
    const material = background.current.material as MeshStandardMaterial;
    material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      {/* Background mesh plane */}
      <mesh
        ref={background}
        position-z={-0.001}
        // onClick={() => window.open(project.url, '_blank')}
      >
        <planeGeometry args={[2, 2.6]} />
        <meshStandardMaterial
          color='white'
          emissive='white'
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Star icon for featured project */}
      {project.isFeatured && (
        <Text
          position={[0.83, 1.11, 0]}
          fontSize={0.17}
          color='#FFEA00'
          fontWeight='bold'
          fillOpacity={1}
        >
          ★
        </Text>
      )}

      {/* Thumbnail image */}
      <Image
        scale={[1.8, 1.2]}
        url={`images/projects/${project.thumbnail}`}
        position-y={0.4}
        toneMapped={false}
      />

      {/* Title */}
      <Text
        color='black'
        maxWidth={1.8}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.12}
        position={[-0.9, -0.3, 0]}
      >
        {project.title.toUpperCase()}
      </Text>

      {/* Description */}
      <Text
        color='black'
        maxWidth={1.8}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.07}
        position={[-0.9, -0.5, 0]}
      >
        {project.description}
      </Text>

      {/* Link to the website */}
      <Text
        color='black'
        maxWidth={1.8}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.08}
        position={[-0.9, -1.1, 0]}
        onClick={() => window.open(project.url, '_blank')}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        Link
      </Text>

      {/* Link to the GitHub repository */}
      <Text
        color='black'
        maxWidth={1.8}
        anchorX={'left'}
        anchorY={'top'}
        fontSize={0.08}
        position={[-0.6, -1.1, 0]}
        onClick={() => window.open(project.github, '_blank')}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'default';
        }}
      >
        GitHub
      </Text>
    </group>
  );
};
