    import { func } from 'prop-types';
    import React, { useState } from 'react';
    import PokemonCapturado from '../../Pokemon';
    let getMypokemonOnStorage =[];

   


  

   
    function Card({pokemon}){
        pokemon.available=true;
       
    

    

    const click = function getpokes() {
        if(JSON.parse(localStorage.getItem('pokemon'))==null){
            localStorage.setItem('pokemon',JSON.stringify(pokemon));
    
            getMypokemonOnStorage.push(JSON.parse(localStorage.getItem('pokemon')));
        }else{
           // localStorage.setItem('pokemon',JSON.stringify(pokemon));

            //console.log('localStorage.getItem('pokemon')');
    
        }   

      
  

    
        if(pokemon.available===true){
         
    
                
        
        }
        
        }



        return(
            

            
            <div className="Card" key={pokemon.id}>
                <hr/>
        <button id={pokemon.id} onClick={click}>Capturar {pokemon.id} </button>
                
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
                        <div className="Card_type" key={type.type.name}>
                            <h3> {type.type.name} </h3> 

                        </div>
                        );
                    })}
                </div>
                <div  className="Card_info" key={pokemon.weight}>
                    <div className="Card_Dados_weight">
                        <p className="title">Weight</p>
                        <p>{pokemon.weight}</p>
                    
                    </div>
                    <div className="Card_Dados_height" key={pokemon.height}>
                        <p className="title">Height</p>
                        <p>{pokemon.height}</p>
                    
                    </div>
                    <div className="Card_Dados_ability"key={pokemon.abilities[0].ability.name} >
                        <p className="title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                        
                    
                    </div>
                
                </div>
            
            </div>
        )
    }
    export default Card;