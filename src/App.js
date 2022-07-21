
import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Filtro from './components/Filtro/Filtro.js';
import Card from './components/Card/Card.js';
import { DivPai } from './style.js';

// lista de dados para utilizar
import cardslist from "../src/data/cards.json"
import Cart from './components/Cart/Cart.js';


function App() {

  const [query, setQuery] = useState("")
  const [minPrice, setMiniPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("name")
  const [order, setOrder] = useState("asc")
  const [products, _setProducts] = useState(cardslist);
  const [productsCart, setProductsCart] = useState([]);

  
  function addProductToCart(product) {
    const { id, name, value } = product;
    const productExists = productsCart.find(item => item.id === id);
    
    if (!productExists) {
      const newProductCart = {
        id,
        name,
        value,
        qtt: 1
      }

      setProductsCart(oldState => [...oldState, newProductCart]);
      return;
    }

    const updateQttProduct = productsCart.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          qtt: item.qtt + 1
        }
      }

      return item;
    })

    setProductsCart(updateQttProduct);
  }

  function onRemoveProductCart(id) {
    const productIsQttEqualOne = productsCart.find(item => item.id === id);

    if (productIsQttEqualOne.qtt === 1) {
      setProductsCart(oldState => oldState.filter(item => item.id !== id));
      return;
    }

    const updateQttProducts = productsCart.map(product => {
      if (product.id === id) {
        const newQtt = product.qtt - 1;

        return {
          ...product,
          qtt: newQtt
        }
      }

      return product;
    });

    setProductsCart(updateQttProducts);
  }

  return (

    <>
      <Header/>
      <DivPai>
        <div style={{display: 'flex', flexDirection: 'column'}}>

        <Filtro
          query={query}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sortingParameter={sortingParameter}
          order={order}
          setQuery={setQuery}
          setMiniPrice={setMiniPrice}
          setMaxPrice={setMaxPrice}
          setSortingParameter={setSortingParameter}
          setOrder={setOrder}
        />
        
        <h3>Cards</h3>
          {products
          .filter((product)=>{
            return product.name.includes(query)
          })
          .filter((product)=>{
            return product.value >= minPrice || minPrice === ""
          })
          .filter((product)=>{
            return product.value <= maxPrice || maxPrice ===""
          })
          .sort((currentProduct, nextProduct) => {
            switch(sortingParameter){
              case "value":
                return currentProduct.value - nextProduct.value
              default:
                return currentProduct.name.localeCompare(nextProduct.name)
            }
          })
          .sort(() => {
            if (order === "asc"){
              return 0
            } else{
              return -1
            }
          })
          .map(product => {
            return <Card key={product.id} card={product} onClick={addProductToCart}/>
          })
        }
        </div>
        <Cart products={productsCart} onRemoveProductCart={onRemoveProductCart}/>
      </DivPai>
    </>
  );
    
}
export default App;

