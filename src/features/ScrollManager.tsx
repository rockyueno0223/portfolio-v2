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

  // Every frame, check the current scroll position and direction
  useFrame(() => {
    // If animating, don't update section based on scroll
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const currSection = Math.floor(data.offset * data.pages);

    // Use a small threshold to avoid float errors
    const delta = data.offset - lastScroll.current;
    const threshold = 0.01; // Ignore tiny scroll fluctuations

    // Detect scroll down from section 0 -> 1
    if (delta > threshold && currSection === 0) {
      onSectionChange(1);
    }

    // Detect scroll up from section 1 -> 0
    if (delta < -threshold && data.offset < 1 / (data.pages - 1)) {
      onSectionChange(0);
    }
  });

  return null;
};
