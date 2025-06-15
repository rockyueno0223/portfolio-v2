import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

interface ScrollMangerProps {
  currentSection: number;
  onSectionChange: React.Dispatch<React.SetStateAction<number>>;
}

export const ScrollManager = ({
  currentSection,
  onSectionChange,
}: ScrollMangerProps) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add('absolute');
  data.fill.classList.add('top-0');

  // Handle programmatic scrolling whenever currentSection changes
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: currentSection * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [currentSection]);

  // Continuously track user scroll via r3f frame loop
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const currSection = Math.floor(data.offset * data.pages);

    // Detect scroll down from section 0 -> 1
    if (data.offset > lastScroll.current && currSection === 0) {
      onSectionChange(1);
    }

    // Detect scroll up from section 1 -> 0
    if (
      data.offset < lastScroll.current &&
      data.offset < 1 / (data.pages - 1)
    ) {
      onSectionChange(0);
    }
  });

  return null;
};
