import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import './estilo.css';

function Header(){
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header