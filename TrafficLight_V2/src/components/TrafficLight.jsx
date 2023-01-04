import { useState, useEffect } from 'react'
import { Light } from './Light';
import { ModeSelector } from './ModeSelector';

export function TrafficLight() { 
  const [modeName, setModeName] = useState('Manual');
  const [automaticMode, setAutomaticMode] = useState(false);
  const [colorIndex, setColorIndex] = useState(null);
  const lightDuration = [3000, 2000, 1000];
  
  async function handleChangeMode() {
    if (document.getElementById('checkbox').checked) {
      setModeName('Automático');
      setAutomaticMode(true);
    } else {
      setModeName('Manual');
      setAutomaticMode(false);
    }
  }

  useEffect(() => {
    if (automaticMode) {
      const timer = setTimeout(() => {
        setColorIndex((colorIndex + 1) % 3);
      }, lightDuration[colorIndex]);
      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <div className='contentWrapper'>
      <div className='lightsWrapper'>
          <Light color="#ff0000" active={colorIndex === 0} disabled={automaticMode} onClick={() => setColorIndex(0)}/>
          <Light color="#ffff00" active={colorIndex === 2} disabled={automaticMode} onClick={() => setColorIndex(2)}/>
          <Light color="#00ff00" active={colorIndex === 1} disabled={automaticMode} onClick={() => setColorIndex(1)}/>
      </div>

      <ModeSelector 
        onClick={handleChangeMode}
        modeName={modeName}
      />

    </div>
  );
}