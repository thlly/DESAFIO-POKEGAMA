import React, { useState,useEffect } from 'react';
import Card from './componentes/Card/Card';
import{Link, NavLink} from 'react-router-dom';



let meusPokemon =[];
meusPokemon.push(JSON.parse(localStorage.getItem('pokemon')));
meusPokemon=meusPokemon[0];
export default function MeusPokemon(){

    return(

        <>
        <h1>Meus Pokemon</h1>
        <Link to="/"><button>Todos Pokemon</button></Link>

        <div className="grid-container">

        {meusPokemon.map((pokemon,i)=>{
          return  <Card key={i} pokemon={pokemon}/>
            
        })}

        </div>
        </>
        
    )
}