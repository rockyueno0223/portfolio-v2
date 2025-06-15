import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';

interface MenuProps {
  currentSection: number;
  onSectionChange: React.Dispatch<React.SetStateAction<number>>;
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({
  currentSection,
  onSectionChange,
  isMenuOpened,
  setIsMenuOpened,
}: MenuProps) => {
  return (
    <>
      {/* Menu toggle */}
      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className={`z-20 fixed top-6 sm:top-12 right-6 sm:right-12 p-3 border-2 border-neutral-900 w-11 h-11 rounded-md ${
          currentSection === 0 ? 'bg-neutral-200' : 'bg-transparent'
        }`}
      >
        <div
          className={`bg-neutral-900 h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? 'rotate-45 translate-y-0.5' : ''
          }`}
        />
        <div
          className={`bg-neutral-900 h-0.5 rounded-md w-full my-1 ${
            isMenuOpened ? 'hidden' : ''
          }`}
        />
        <div
          className={`bg-neutral-900 h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? '-rotate-45' : ''
          }`}
        />
      </button>

      {/* Menu */}
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-neutral-200 transition-all overflow-hidden flex flex-col ${
          isMenuOpened ? 'w-full sm:w-80' : 'w-0'
        }`}
      >
        <div className='flex-1 flex flex-col items-center sm:items-start justify-center gap-6 p-8'>
          {/* Menu buttons */}
          <MenuButton label='Home' onClick={() => onSectionChange(0)} />
          <MenuButton label='About' onClick={() => onSectionChange(1)} />
          <MenuButton label='Work' onClick={() => onSectionChange(2)} />
          <MenuButton label='Contact' onClick={() => onSectionChange(3)} />

          {/* Links */}
          <div className='flex gap-4'>
            <a
              href='https://github.com/rockyueno0223'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='text-xl hover:text-neutral-600' />
            </a>
            <a
              href='https://www.linkedin.com/in/hiroki-ueno-9a6bb4316/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='text-xl hover:text-neutral-600' />
            </a>
            <a
              href='https://dev.to/rockyueno0223'
              target='_blank'
              rel='noreferrer'
            >
              <FaDev className='text-xl hover:text-neutral-600' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

interface MenuButtonProps {
  label: string;
  onClick: Function;
}

const MenuButton = ({ label, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className='text-2xl font-bold cursor-pointer border-b-2 border-transparent hover:text-neutral-600 hover:border-neutral-600 leading-tight transition-all duration-200'
    >
      {label}
    </button>
  );
};
