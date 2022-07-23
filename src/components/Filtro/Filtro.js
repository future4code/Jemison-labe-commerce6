import React from "react";
import { FiltroInputStyled, FiltroStyled, FiltroStyledHeader } from "./style";

 const Filtro =(props) => {
    return(
        <FiltroStyled>
            <h3>Busca Avançada</h3>
            <label>Valor mínimo</label>
            <FiltroInputStyled
                type="number"
                placeholder="Digite o valor"
                value={props.minPrice}
                onChange={(ev)=>{props.setMiniPrice(ev.target.value)}}
            />

            <label>Valor máximo</label>
            <FiltroInputStyled
                type="number" 
                placeholder="Digite o valor"
                value={props.maxPrice}
                onChange={(ev)=>{props.setMaxPrice(ev.target.value)}}
            />

            <label>Buscar por nome</label>
            <FiltroInputStyled
                placeholder="Produto"
                value={props.query}
                onChange={(ev)=>{props.setQuery(ev.target.value)}}
            />

        <label htmlFor="sortingParameter">Ordenar por: </label>
            <select
                name="sortingParameter"
                value={props.sortingParameter}
                onChange={ev=>{props.setSortingParameter(ev.target.value)}}
            >
                <option value={"name"}>Nome</option>
                <option value={"value"}>Preço</option>
            </select>

            <select 
                value={props.order}
                onChange={ev=>{props.setOrder(ev.target.value)}}
            >
                <option value={"asc"}>Crescente</option>
                <option value={"desc"}>Decrescente</option>
            </select>
        </FiltroStyled>
    )
}

export default Filtro;

export const FiltroHeader = (props) =>{
    return(
        <div>
            <FiltroStyledHeader
                placeholder="Busque seu Foguete"
                value={props.query}
                onChange={(ev)=>{props.setQuery(ev.target.value)}}
                />
    </div>
    )
}