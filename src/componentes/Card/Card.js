                import { func } from 'prop-types';
                import React, { useState } from 'react';
                let getMypokemonOnStorage =[];

            


            
                function Card({pokemon}){
                    console.log(pokemon.avaliable);

                


                const click = function getpokes() {
                    localStorage.setItem('abilities',JSON.stringify(pokemon.abilities));
                    localStorage.setItem('avaliable',JSON.stringify(false));
                    localStorage.setItem('base_experience',JSON.stringify(pokemon.base_experience));
                    localStorage.setItem('forms',JSON.stringify(pokemon.forms));
                    localStorage.setItem('game_indices',JSON.stringify(pokemon.game_indices));
                    localStorage.setItem('height',JSON.stringify(pokemon.height));
                    localStorage.setItem('held_items',JSON.stringify(pokemon.held_items));
                    localStorage.setItem('id',JSON.stringify(pokemon.id));
                    localStorage.setItem('is_default',JSON.stringify(pokemon.is_default));
                    localStorage.setItem('location_area_encounters',JSON.stringify(pokemon.location_area_encounters));
                    localStorage.setItem('moves',JSON.stringify(pokemon.moves));
                    localStorage.setItem('name',JSON.stringify(pokemon.name));
                    localStorage.setItem('order',JSON.stringify(pokemon.order));
                    localStorage.setItem('species',JSON.stringify(pokemon.species));
                    getMypokemonOnStorage.abilities=JSON.parse(localStorage.getItem('abilities'));
                    getMypokemonOnStorage.avaliable=false;
                    getMypokemonOnStorage.base_experience=JSON.parse(localStorage.getItem('abilities'));
                    getMypokemonOnStorage.forms=JSON.parse(localStorage.getItem('forms'))

                    getMypokemonOnStorage.game_indices=JSON.parse(localStorage.getItem('game_indices'));

                    getMypokemonOnStorage.height=JSON.parse(localStorage.getItem('height'));

                    getMypokemonOnStorage.id=JSON.parse(localStorage.getItem('id'));

                    getMypokemonOnStorage.is_default=JSON.parse(localStorage.getItem('is_default'));
                    getMypokemonOnStorage.location_area_encounters=JSON.parse(localStorage.getItem('location_area_encounters'));
                    getMypokemonOnStorage.moves=JSON.parse(localStorage.getItem('moves'));
                    getMypokemonOnStorage.name=JSON.parse(localStorage.getItem('name'));
                    getMypokemonOnStorage.order=JSON.parse(localStorage.getItem('species'));
                   



                    
                        console.log(getMypokemonOnStorage);
                        pokemon.avaliable=false;
                      





                

            

                
               
                

            
                    
                    }



                    return(
                        
                    
                        <div className="Card" key={pokemon.id}>
                            <hr/>
                    <button id={pokemon.id}  onClick={click}>Capturar {pokemon.id} </button>
                            
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