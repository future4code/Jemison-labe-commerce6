import React from "react";

import { CardProdutoStyle, ImagemProdutoStyled } from "./CardProdutoStyle";

const CardProduto = (props) => {
    const listaDeProdutos = props.listaProdutos.map((item, index) => {
        return (

            <CardProdutoStyle>
                <p> {item.nome} </p>
                <p>{item.valorNovo}</p>
                <ImagemProdutoStyled src={item.imagem}/>
            </CardProdutoStyle>
        )

    })
    return (
        <CardProdutoStyle>
            {listaDeProdutos}
        </CardProdutoStyle>


    )
}
export default CardProduto;