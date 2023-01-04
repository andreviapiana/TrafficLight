import { useState } from 'react'
import { Light } from './Light';

export function Sinalizacao({ colors = [] }) {
  const [actualId, setActualId] = useState('');

  return (
      <div className='sinalizacao'>
        {colors.map(({ id, color, colorName }) => (
          <Light 
            key={id}
            color={color} 
            colorName={colorName} 
            active={id === actualId} 
            onClick={() => setActualId(id)} 
          />
        ))}
      </div>
  );
}