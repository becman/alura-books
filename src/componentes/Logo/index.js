import styled from 'styled-components';
import logo from '../../imagens/logo.svg';

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo(){
    return (
        <LogoConteiner>
            <LogoImage
                src={logo} 
                alt='logo'
                className='logo-img'
            />
            <p><strong> Alura Books</strong></p>
        </LogoConteiner> 
    )
}
export default Logo




