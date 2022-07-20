import React from "react";
import { Cards, Nome, Valor, Imagem, Comprar, Botao } from './CardStyle.js'
import BotaoImg from '../../Images/comprarTeste.png'
const Card = (props) => {
    return(
        <Cards>
            <Nome> {props.card.name} </Nome>
            <Imagem src={props.card.imageUrl} alt={'Imagem do produto'}/>
            <Valor>R$ {props.card.value} <Comprar><Botao src={BotaoImg}/> </Comprar></Valor>
         </Cards>

    )
}

export default Card;