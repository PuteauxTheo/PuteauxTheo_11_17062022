import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.png'


function Header() {
    return( 
        <header> 
            <img src={logoHeader} alt='logo du site Web Kasa haut de page'/>
            <nav> 
                <ul className='menuHeader'>
                    <li><Link to="/"> Accueil</Link></li>
                    <li><Link to="/about"> A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header