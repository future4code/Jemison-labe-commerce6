import React from "react";
import { Cards } from './style'

const Card = (props) => {
    return(
        <Cards>
            <img src={props.card.imageUrl} alt={'Imagem do produto'}/>
            <div> {props.card.name} </div>
            <div> R$ {props.card.value}</div>
            <button>Adicionar ao carrinho</button>
        </Cards>

    )
}

export default Card;