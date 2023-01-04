export function ModeSelector({ onClick, modeName }) {

  return (
    <div className='modeSelector'>
      <p>Seletor de Modo</p>

      <label className="switch" id='switch'>
        <input type="checkbox" id='checkbox' onClick={onClick}/>
        <span className="slider round"></span>
      </label>
      
      <p><span>{modeName}</span></p>
    </div>
  );
}