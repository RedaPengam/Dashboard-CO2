
export default function Body(title) {

  // ------------------------ constructor ------------------------------------------------------------------------------------------------

  // ------------------------ methods ------------------------------------------------------------------------------------------------

  // ------------------------ view ------------------------------------------------------------------------------------------------

  return (
    <div className='body'>

      <div className='body-header'>
        <div className='body-header-left'>{title}</div>
        <div className='body-header-right'>Equivalences 👇</div>
      </div>
      
      <div className='body-content'>

        <div className='body-content-left'>
          <div className='body-content-left-selection'>
            
            <div className='body-content-left-selection-box'>
              <div className="body-content-left-selection-title">Sélectionne ton modèle ci-dessous</div>  
              <div className="body-content-left-selection-buttons">
                <button className="body-content-left-selection-button">Marque</button>
                <button className="body-content-left-selection-button">Modèle</button>
                <button className="body-content-left-selection-button">Capacité</button>
              </div>
            </div>
            
            <div className="body-content-left-selection-age">aaaaaaaaaaaaage
            </div>       
          
          </div>
        
        </div>

        <div className='body-content-right'>Gnagna CO2</div>
      
      </div>
    
    </div>
  );
}