import './style.css';
import logo from '../../img/logo.webp';
import TituloHeader from  '../TituloHeader';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';



function Header(){
    return(
        <header className='App-header'>
            <div className='teste'>
                <img src={logo} alt='Logo AgroGalope'/>
                <TituloHeader/>
            </div>
            <nav className='teste'>
                <OpcoesHeader/>
                <IconesHeader/>
            </nav>
        </header>
    )
}

export default Header;