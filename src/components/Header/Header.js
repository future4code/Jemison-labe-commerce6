import React,{useState} from "react";
import { DivHeader, LogoStyled } from './style.js';
import logo from '../../Images/LOGO.png'







const Header = () => {
    return(
        <DivHeader>
           <LogoStyled src= {logo} />
        </DivHeader>
    )
}

export default Header