import React from "react";
import Header from "../Header/Header.js";
import { Main, MainDiv } from "./LabECommerceStyle.js";
import CardProduto from "../CardProduto/CardProduto.js"; 
import {produtos} from "../../MockpDados.js"; 
import styled from "styled-components";
//Essa página deverá carregar todo o layout e lógica da home para ser chamada apenas ela no App.js



const LabECommerce =()=>{
    return(
        <MainDiv>
        
        <Header/>
        <CardProduto listaProdutos={produtos}/>
        </MainDiv>           
        
    );
}

export default LabECommerce