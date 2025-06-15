import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFirebase, IoLogoVue } from 'react-icons/io5';
import { RiJavaLine, RiNextjsFill } from 'react-icons/ri';
import {
  SiExpress,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

export const AboutSection = () => {
  return (
    <div className='w-full h-full overflow-y-scroll sm:overflow-y-auto text-blue-100'>
      <div className='w-full min-h-full flex flex-col sm:justify-center gap-2'>
        <div className='w-full flex flex-col sm:flex-row justify-between gap-2'>
          {/* Profile image */}
          <div className='w-full sm:w-1/3 p-6 border-2 border-blue-400 flex justify-center items-center rounded-md'>
            <img src='/images/profile.jpg' alt='Rocky' className='rounded-md' />
          </div>

          {/* History */}
          <div className='w-full sm:w-2/3 p-4 border-2 border-blue-400 rounded-md flex flex-col justify-center gap-6'>
            <div className=''>
              <p className='text-xl'>Roots of my passion</p>
              <p className='text-sm'>
                While in university, I studied English in Melbourne, Australia,
                and traveled to 10 countries around the world. These experiences
                made me realize how much I enjoy stepping out of my comfort zone
                and embracing new challenges.
              </p>
            </div>
            <div className=''>
              <p className='text-xl'>Work in Japan</p>
              <p className='text-sm'>
                I worked as a back-end engineer at a software company in Japan.
                On the front end, I used HTML, CSS, JavaScript, and Vue.js,
                while on the back end, I worked with Java, PHP, and C#.
              </p>
            </div>
            <div className=''>
              <p className='text-xl'>Life in Vancouver</p>
              <p className='text-sm'>
                I moved to Vancouver to experience a new environment and bring
                more excitement to my life. I’m currently studying Web
                Development at a local college to enhance my technical skills
                and explore new career opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Skillsets */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-2'>
          <div className='border-2 border-blue-400 rounded-md p-4 flex flex-col items-center gap-2'>
            <p className=''>Languages</p>
            <div className='w-full flex justify-center gap-1'>
              <FaHtml5 className='text-4xl text-orange-600' />
              <FaCss3Alt className='text-4xl text-blue-600' />
              <IoLogoJavascript className='text-4xl text-yellow-400' />
              <BiLogoTypescript className='text-4xl text-blue-500' />
              <SiPhp className='text-4xl text-indigo-500' />
              <RiJavaLine className='text-4xl text-red-600' />
            </div>
          </div>

          <div className='border-2 border-blue-400 rounded-md p-4 flex flex-col items-center gap-2'>
            <p className=''>Frameworks & Libraries</p>
            <div className='w-full flex justify-center gap-1'>
              <SiTailwindcss className='text-4xl text-sky-400' />
              <FaReact className='text-4xl text-cyan-400' />
              <RiNextjsFill className='text-4xl text-black dark:text-white' />
              <IoLogoVue className='text-4xl text-green-500' />
              <SiRedux className='text-4xl text-purple-500' />
              <SiShadcnui className='text-4xl text-rose-400' />
              <TbBrandFramerMotion className='text-4xl text-pink-500' />
            </div>
            <div className='w-full flex justify-center gap-1'>
              <SiPrisma className='text-4xl text-indigo-500' />
              <FaNodeJs className='text-4xl text-green-600' />
              <SiExpress className='text-4xl text-neutral-500' />
              <FaLaravel className='text-4xl text-red-500' />
              <SiSass className='text-4xl text-pink-400' />
              <FaBootstrap className='text-4xl text-purple-600' />
              <SiJquery className='text-4xl text-blue-400' />
            </div>
          </div>

          <div className='border-2 border-blue-400 rounded-md p-4 flex flex-col items-center gap-2'>
            <p className=''>DB & SaaS</p>
            <div className='w-full flex justify-center gap-1'>
              <SiSupabase className='text-4xl text-emerald-500' />
              <IoLogoFirebase className='text-4xl text-yellow-400' />
              <SiMongodb className='text-4xl text-green-600' />
              <SiMysql className='text-4xl text-blue-600' />
              <SiPostgresql className='text-4xl text-blue-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
