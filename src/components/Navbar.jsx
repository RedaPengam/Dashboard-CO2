import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className='navigation'>            
            <div className='navigation-logo'>🍓</div>
            <div className="navigation-center">

                <Link to="/" className="link">
                    <button className='navigation-box'>
                        <div className='navigation-box-title'>Home</div>    
                    </button>
                </Link>
                
                <Link to="/computer" className="link">
                    <button className='navigation-box'>
                        <div className='navigation-box-title'>Ordinateur</div>                    
                    </button>
                </Link>

                <Link to="/smartphone" className="link">
                    <button className='navigation-box'>
                        <div className='navigation-box-title'>Smartphone</div>                    
                    </button>
                </Link>

                <Link to="/screen" className="link">
                    <button className='navigation-box'>
                        <div className='navigation-box-title'>Ecran</div>                    
                    </button>
                </Link>

            </div>
            <div className='navigation-logo'>🥐</div>
        </div>
    )
}