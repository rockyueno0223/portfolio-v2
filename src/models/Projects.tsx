import { useThree } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useAtom } from 'jotai';
import { currentProjectAtom, projects } from '../assets/projectData';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  const isMobile = viewport.width < 5.2;

  return (
    <motion.group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x:
              index < currentProject
                ? -2.5 - 6 / (1 + index)
                : index > currentProject
                ? 2.5
                : isMobile
                ? 0
                : -1.5,
            y: index <= currentProject ? (isMobile ? -1.6 : -2) : -3,
            z:
              index < currentProject
                ? 3
                : index > currentProject
                ? -3 + index * -0.1
                : -1,
            rotateX: currentProject === index ? 0 : -Math.PI / 4,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            scale: currentProject === index ? (isMobile ? 2 : 2.5) : 1,
          }}
          transition={{ duration: 1.5 }}
        >
          <ProjectCard
            project={project}
            highlighted={index === currentProject}
          />
        </motion.group>
      ))}
    </motion.group>
  );
};
