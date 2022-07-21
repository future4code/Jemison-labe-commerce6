import React from "react";
import { AsideCart, CardItem, ProductName } from './style'


const Cart = ({products, onRemoveProductCart}) => {
    const totalValue = products.map(item => item.value * item.qtt)
                               .reduce((acc, item) => acc + item, 0);
    return(
            <AsideCart>
                <h1>Carrinho</h1>

                {products.map(product => (
                    <CardItem key={product.id}>
                        {product.qtt}x <ProductName>{product.name}</ProductName> 
                        <button type='button' onClick={() => onRemoveProductCart(product.id)}>Remover</button>
                    </CardItem>
                ))}
                <strong>Valor total: R${totalValue}</strong>
            </AsideCart>
    )
}

export default Cart;