import React from 'react';

function Card({pokemon}){
    return(
        <div className="Card">
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
                        <h6> {type.type.name} </h6> {type.type.name}

                     </div>
                    );
                })}
            </div>
            <div  className="Card_info">

            </div>
        </div>
    )
}
export default Card;