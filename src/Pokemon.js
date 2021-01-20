import axios from 'axios';

var PokemonObject = function(id,name,url,urlPhoto){
    this.id=id;
    this.name=name;
    this.url=url;
    this.urlPhoto=urlPhoto;

    }
    const listpokemons =[];
    let idpic=parseInt(0);
 const Pokemon=  function (pokemons){
     var id=parseInt(0);
        for(var position in pokemons){
             id +=parseInt(position)+1;
             
             let imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+id+'.png';
             
               listpokemons[position]=new PokemonObject(id,pokemons[position].name,pokemons[position].url,imgUrl);
               id=0;
               idpic=0;
               console.log(listpokemons[position]);
        
            }
        return listpokemons;
      }



    

      export default Pokemon;