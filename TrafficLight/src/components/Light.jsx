export function Light({ id, color, active, colorName, onClick }) {
  return (
    <button className="sinalizacao_button" id={id} onClick={onClick} disabled={active}>
      <div 
        className={`sinalizacao_luz ${active ? 'activeLight' : ''}`}
        style={{ backgroundColor: color }} 
        colorName={colorName}
      />
    </button>
  );
}