import { useAtom } from 'jotai';
import { currentProjectAtom, projects } from '../assets/projectData';

export const WorkSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  return (
    <div className='w-full h-full flex items-end justify-center'>
      <div className='w-full max-w-2xl flex justify-between'>
        <button
          className='text-4xl hover:text-indigo-600 transition-colors'
          onClick={previousProject}
        >
          {'<'}
        </button>
        <button
          className='text-4xl hover:text-indigo-600 transition-colors'
          onClick={nextProject}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
