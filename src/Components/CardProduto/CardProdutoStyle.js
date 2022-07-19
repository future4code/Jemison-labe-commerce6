import styled from "styled-components";

export const CardProdutoStyle = styled.div`
display: grid;
grid-template-columns: 5fr 5fr 5fr 5fr;
grid-template-rows: 1fr 1fr 1fr 1fr ;
grid-column-gap: 10px;
grid-row-gap: 10px;
padding: 10px;
border: solid 2px black;
border-radius: 20px;
width:80%;
`;

export const ImagemProdutoStyled = styled.img`
display:flex;
justify-content:center;
width:50px;
`;