 
export default function Board(props) {
  return (
    <div className='board'>
      <div className='board-header'>
        <div className='board-header-left'>💻 Ordinateur</div>
        <div className='board-header-right'>Equivalences 👇</div>
      </div>
      <div className='board-content'>

        <div className='board-content-left'>
          <div className='board-content-left-selection'>
            
            <div className='board-content-left-selection-box'>
              <div className="board-content-left-selection-title">Sélectionne ton modèle ci-dessous</div>  
              <div className="board-content-left-selection-buttons">
                <button className="board-content-left-selection-button">Marque</button>
                <button className="board-content-left-selection-button">Modèle</button>
                <button className="board-content-left-selection-button">Capacité</button>
              </div>
            </div>
            
            <div className="board-content-left-selection-age">aaaaaaaaaaaaage</div>            
          
          </div>
        
        </div>

        <div className='board-content-right'>Gnagna CO2</div>
      
      </div>
    </div>
  );
}