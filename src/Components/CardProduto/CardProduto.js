import React from "react";
import testeImagem from '../../Images/Produtos/Teste.jpg'
import { CardProdutoStyle, ImagemProdutoStyled } from "./CardProdutoStyle";

const CardProduto = (props) => {
    const listaDeProdutos = props.listaProdutos.map((item, index) => {
        return (

            <CardProdutoStyle>
                <p> {item.nome} </p>
                <p>{item.valorNovo}</p>
                <ImagemProdutoStyled src={item.imagem}/>
                <ImagemProdutoStyled src={testeImagem}/>
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