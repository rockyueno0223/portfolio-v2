import { motion } from 'framer-motion';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { WorkSection } from '../sections/WorkSection';

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
      className={`w-full max-w-7xl h-screen p-4 sm:p-6 mx-auto flex flex-col justify-center items-center`}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className='w-screen flex flex-col items-center'>
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <AboutSection />
      </Section>
      <Section>
        <WorkSection />
      </Section>
      <Section>
        <ContactSection />
      </Section>
    </div>
  );
};
