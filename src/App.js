
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Filtro from './Components/Filtro/Filtro.js';
import Carrinho from './Components/Carrinho/Carrinho.js';
import Card from './Components/Card/Card';
import { DivPai } from './style.js';

// lista de dados para utilizar
import cardslist from "../src/data/cards.json"

function App() {

  const [cards] = useState(cardslist)
  const [query, setQuery] = useState("")
  const [minPrice, setMiniPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("name")
  const [order, setOrder] = useState("asc")

  return (

    <>
      <Header/>
      <DivPai>
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
        {cards
        .filter((card)=>{
          return card.name.includes(query)
        })
        .filter((card)=>{
          return card.value >= minPrice || minPrice === ""
        })
        .filter((card)=>{
          return card.value <= maxPrice || maxPrice ===""
        })
        .sort((currentCard, nextCard) => {
          switch(sortingParameter){
            case "value":
              return currentCard.value - nextCard.value
            default:
              return currentCard.name.localeCompare(nextCard.name)
          }
        })
        .sort(() => {
          if (order === "asc"){
            return 0
          } else{
            return -1
          }
        })
        .map(card => {
          return <Card key={card.id} card={card} />
        })
        }
        <Carrinho/>
      </DivPai>
    </>
  );
    
}
export default App;

