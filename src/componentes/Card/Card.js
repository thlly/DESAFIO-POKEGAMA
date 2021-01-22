import React, { useState } from 'react';

function Card({pokemon}){

    return(
        
        <div className="Card">
    
             <hr/>
             <h1> {pokemon.id}</h1>  
            <div className="Card_img">
             <img src={pokemon.sprites.front_default} alt=""></img>
            </div>
            <div className="Card_name">
           
               <h1> {pokemon.name}</h1> 
            </div>
            <div className="Card_types">
             <h1>
                 
             </h1>
                {pokemon.types.map(type =>{
                    return (
                     <div className="Card_type">
                        <h3> {type.type.name} </h3> 

                     </div>
                    );
                })}
            </div>
            <div  className="Card_info">
                <div className="Card_Dados_weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                 
                </div>
                <div className="Card_Dados_height">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                 
                </div>
                <div className="Card_Dados_ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                    
                 
                </div>
              
            </div>
           
        </div>
    )
}
export default Card;