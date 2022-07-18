import React from "react";
import { CardProdutoStyle } from "./CardProdutoStyle";

const CardProduto = (props) =>{
    const listaDeProdutos = props.listaProdutos.map((item,index)=>{
        return <li key={index}>{item.nome}</li>
    })
    return(
        <CardProdutoStyle>
            {listaDeProdutos}
        </CardProdutoStyle>
         
        
    )
}
export default CardProduto;