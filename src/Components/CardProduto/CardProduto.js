import React from "react";
import { CardProdutoStyle, ImagemProdutoStyled } from "./CardProdutoStyle";

const CardProduto = (props) =>{
    const listaDeProdutos = props.listaProdutos.map((item,index)=>{
        return  <li key={index}>{[item.nome,item.imagem, item.descricao, item.quantidade, item.valorNovo]}</li>
          
    })
    return(
        <CardProdutoStyle>
            {listaDeProdutos}
                    
        </CardProdutoStyle>
         
        
    )
}
export default CardProduto;