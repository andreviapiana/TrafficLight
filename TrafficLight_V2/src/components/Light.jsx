export function Light({ color, active, disabled, onClick }) {

  return (
    <button className="lightButton" onClick={onClick} disabled={disabled || active}>
      <div 
        className={`light ${active ? 'activeLight' : ''}`}
        style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
      />
    </button>
  );
}