import React from "react";

const Filtro =(props) => {
    return(
        <div>
            <h3>Filtros</h3>
            <label>Valor mínimo</label>
            <input
                type="number"
                placeholder="Digite o valor"
                value={props.minPrice}
                onChange={(ev)=>{props.setMiniPrice(ev.target.value)}}
            />

            <label>Valor máximo</label>
            <input
                type="number" 
                placeholder="Digite o valor"
                value={props.maxPrice}
                onChange={(ev)=>{props.setMaxPrice(ev.target.value)}}
            />

            <label>Buscar por nome</label>
            <input
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
        </div>
    )
}

export default Filtro;