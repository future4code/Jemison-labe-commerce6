
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Filtro from './components/Filtro/Filtro.js';
import Card from './components/Card/Card.js';
import { DivComCards, DivPai,FiltroHeaderDiv,Footer,HeaderComBusca, Home, NavFiltro, Logo,TextFooter, ImgFooter} from './style.js';
//imagens
import LogoFooter from './Images/LOGO.png';
import Face from './Images/Face.png';
import Insta from './Images/Insta.png';
import Whats from './Images/Whats.png';
import Twitter from './Images/Twitter.png';
// lista de dados para utilizar
import cardslist from "./data/cards.json"
import Cart from './components/Cart/Cart.js';

import { FiltroHeader } from './components/Filtro/Filtro.js';


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
      
      <DivPai>
        <HeaderComBusca>
        <Header/>
         <FiltroHeaderDiv>
         <FiltroHeader 
        query={query}
         sortingParameter={sortingParameter}
          order={order}
          setQuery={setQuery}
          setSortingParameter={setSortingParameter}
          setOrder={setOrder}/>
          </FiltroHeaderDiv>
     </HeaderComBusca>
<Home>
     <NavFiltro>
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
        </NavFiltro>

<DivComCards>
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
        </DivComCards>
        <Cart products={productsCart} onRemoveProductCart={onRemoveProductCart}/>
        </Home>
        <Footer>
          <Logo src={LogoFooter}/>
         <TextFooter>&copy;2022 LBN_SPACE TRIP. Todos os direitos reservados.</TextFooter>
        <ImgFooter src={Whats}/>
        <ImgFooter src={Insta}/>
        <ImgFooter src={Face}/>
        <ImgFooter src={Twitter}/>
        </Footer>
        
     
        
      </DivPai>
    </>
  );
    
}
export default App;

