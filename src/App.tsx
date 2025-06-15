import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Menu } from './components/Menu';
import { Interface } from './features/Interface';
import { ScrollManager } from './features/ScrollManager';
import { Showcase } from './features/Showcase';

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [currentSection]);

  return (
    <>
      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager
            currentSection={currentSection}
            onSectionChange={setCurrentSection}
          />
          <Scroll>
            <Showcase currentSection={currentSection} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>

      <Menu
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </>
  );
}

export default App;
