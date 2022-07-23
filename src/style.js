import styled from "styled-components";



export const DivPai = styled.div`
    background-color: white;
    padding: 0px;
`;

export const HeaderComBusca = styled.div`
display: flex;
align-items:center;
`;
export const FiltroHeaderDiv = styled.div`
display: flex;
margin: -80%;
`;

export const Home = styled.div`
display:flex;
flex-wrap:wrap;
margin: 20px;
height:100%;
`;

export const NavFiltro = styled.div`
display: flex;
flex-wrap:wrap;
flex-direction:column;
width: 15%;
height:40%;
border: 4px solid #45525B;
background-color:#F6B057;
border-radius: 20px;
margin-bottom: 20px;
`;

export const DivComCards = styled.div`
display: grid;
grid-gap: 45px ;
grid-template-columns: 2fr 2fr 2fr;
width: 60%;
max-width:60%;
justify-content:center;
align-items: center;
margin-left: 40px;
padding-bottom:40px;
`;

export const Footer = styled.footer`
display: flex;
 background-color:#001930;
 height:160px;
color: white;
font-family:'calibri';
font-weight:bolder;
font-size:20px;
padding-left:300px;
justify-content:left;
`;


export const Logo = styled.img`
width:20%;
margin-left:-20%;
margin-top:-1%;
margin-bottom:-1%;
`;

export const TextFooter = styled.p`
padding-top:3%;
`;

export const ImgFooter = styled.img`
width: 80px;
height: 80px;
align-self:center;
margin-left:30px;
:hover{
   border: 6px solid white;
   border-radius:100%100%;
   width:68px;
   height:68px;
}
`;

