import { Macbook } from '../models/Macbook';
import { Projects } from '../models/Projects';
import { Background } from './Background';

interface Props {
  currentSection: number;
}

export const Showcase = ({ currentSection }: Props) => {
  return (
    <>
      <Background />
      <ambientLight intensity={1} />

      {currentSection === 0 && <Macbook />}
      <Projects />
    </>
  );
};
