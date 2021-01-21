      import axios from 'axios';
      import { Component } from 'react';
  


      const listpokemons =[];
      let myPokemons =[];

      

      let PokemonObject = function(id,name,url,urlPhoto,type){
          this.id=id;
          this.name=name;
          this.url=url;
          this.urlPhoto=urlPhoto;
          this.type=type;
          this.state=true;

          };

   const Pokemon=  function (pokemons){
          var id=parseInt(0);
              for(var position in pokemons){
                  id +=parseInt(position)+1;
                  
                  let imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+id+'.png';
              
                  listpokemons[position]=new PokemonObject(id,pokemons[position].name,pokemons[position].url,imgUrl); 
                  
           
              
                  id=0;
                  
              
        

        
              
                  }


              return listpokemons;
            }





function getPokemons(pokemon) {
  if(pokemon.state==true){
    myPokemons=pokemon;
  }else{
    console.log("Este pokemon não está disponível");
  }

  
}

function soltarPokemon(pokemon) {
  if(pokemon.state==false){
    myPokemons=pokemon;
  }else{
    console.log("Este pokemon já foi solto");
  }

  
}



export default Pokemon;
