                import { func } from 'prop-types';
                import React, { useState } from 'react';
                let getMypokemonOnStorage =[];
                let pokemonPush =[];




            
                function Card({pokemon}){

                


                const click = function getpokes() {
        if(getMypokemonOnStorage==null){

                    localStorage.setItem('pokemon',JSON.stringify(pokemon));
                    getMypokemonOnStorage.push(JSON.parse(localStorage.getItem('pokemon')));


                }else{
                    localStorage.setItem('pokemon',JSON.stringify(pokemon));
                    getMypokemonOnStorage.push(JSON.parse(localStorage.getItem('pokemon')));
                    localStorage.setItem('pokemon',JSON.stringify(getMypokemonOnStorage));
                }
                localStorage.setItem('pokemon',JSON.stringify(getMypokemonOnStorage));

            }
                       
        



                    return(
                        
                    
                        <div className="Card" key={pokemon.id}>
                      
                            
                            <h2 className="id-pokemon"> {pokemon.id}</h2>  
                            <div className="Card_img">
                            <img src={pokemon.sprites.front_default} alt=""></img>
                            </div>
                            <div className="Card_name">
                        
                            <h1 className="pokemon-name"> {pokemon.name}</h1> 
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
                          
                    <button  id={pokemon.id}  onClick={click}>Capturar </button>
                   
                        
                        </div>
                    )
                }
                export default Card;