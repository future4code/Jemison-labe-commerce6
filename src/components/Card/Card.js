import React from "react";
import { Cards, Nome, Valor, Imagem, Comprar, Botao } from './CardStyle.js'
import BotaoImg from '../../Images/Comprar.png'
const Card = (props) => {
    const product = {
        id: props.card.id,
        imageUrl: props.card.imageUrl,
        name: props.card.name,
        value: props.card.value
    }

    
    return(
        <Cards>
            <Nome> {product.name} </Nome>
            <Imagem src={product.imageUrl} alt={'Imagem do produto'}/>
            <Valor>R$ {product.value} 
                <Comprar onClick={() => props.onClick(product)}>
                    <Botao src={BotaoImg}/> 
                </Comprar>
            </Valor>
         </Cards>

    )
}

export default Card;