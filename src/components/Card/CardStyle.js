import styled from "styled-components";


export const Cards = styled.div`
    border: 5px solid #F47E20;
    border-radius:20px;
    width: 300px;
    padding:6px;
    margin-bottom: 10px;
    text-align:center; 
    background-color:#A1BCC8;  
    
    
`;

export const Nome = styled.div`
font-size: 25px;
font-weight:bolder;
font-family:'arial';
padding-bottom:15px ;
margin-top:6px;

`;
export const Valor = styled.div`

font-size: 25px;
font-weight:bolder;
font-family:'arial';
width:95%;
justify-content:center;
border: 4px solid #F47E20;
text-align:left;
padding-top: 9%;
padding-left:8px;
border-radius:60px;
background-color: white;
`;
export const Imagem = styled.img`
width:80%;


`;
export const Comprar = styled.button`
border:none;
background:none;
margin-left:70%;
margin-top:-100%;

`;

export const Botao = styled.img`
width:90%;
margin:6px;
:hover{
    width:78%;
    border: 6px solid #45525B;
    border-radius:100%;}
`;