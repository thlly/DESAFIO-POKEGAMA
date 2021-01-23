import React, { useState,useEffect } from 'react';
import Card from './componentes/Card/Card';
import{Link, NavLink} from 'react-router-dom';



let meusPokemon =[];
meusPokemon.push(JSON.parse(localStorage.getItem('pokemon')));
meusPokemon=meusPokemon[0];
export default function MeusPokemon(){

  const [seachterm,setSeachTerm]=useState("");
  const [pokemonData,setPokemonData]=useState([]);

    return(

        <>
        <h2>Meus Pokemon</h2>
        <div className="seach"> 
                           <input type="text"
                            placeholder="Pesquisar Pokemon"
                            onChange={event=>{
                              setSeachTerm(event.target.value)
                              }}
                              />
                          
                           </div>
        
        <Link to="/"><button>Todos Pokemon</button></Link>

        <div className="grid-container">

        {meusPokemon.filter((pokemon)=>{
                             if(seachterm==""){
                               return pokemon;
                             }else if(pokemon.name.toLowerCase().includes(seachterm.toLowerCase())){
                               return pokemon;
                             }
                           }).map((pokemon,key)=>{
                        
                         
                               return  <Card key={key} pokemon={pokemon}/>
                          
                        
                           })}

        </div>
        </>
        
    )
}