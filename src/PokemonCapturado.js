import React from 'react';
import Card from './componentes/Card/Card';


let meusPokemon =[];
meusPokemon.push(JSON.parse(localStorage.getItem('pokemon')));
meusPokemon=meusPokemon[0];
console.log(meusPokemon);

export default function MeusPokemon(){
    return(

        <>
        <h1>Meus Pokemon</h1>
        <div className="grid-container">

        {meusPokemon.map((pokemon,i)=>{
          
          return  <Card key={i} pokemon={pokemon}/>
            
        })}

        </div>
        </>
        
    )
}