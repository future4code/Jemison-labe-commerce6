import React from "react";
import Logo from "../../Images/LogoLabenu.jpg";
import {HeaderStyle, LogoStyle, InputStyle} from './HeaderStyle';

const Header =()=>{
    return(
        <HeaderStyle>
           <LogoStyle src={Logo} className='LogoLabenu' alt="Logo"/>
           <InputStyle
           placeholder="Buscar Produto"
           />
           <button>Buscar</button>
        </HeaderStyle>
    )
}
export default Header