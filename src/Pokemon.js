import axios from 'axios';

var PokemonObject = function(id,name,url,urlPhoto){
    this.id=id;
    this.name=name;
    this.url=url;
    this.urlPhoto=urlPhoto;

    }
    const listpokemons =[];
    let idpic=0;
 const Pokemon=  function (pokemons){
     var id=parseInt(0);
        for(var position in pokemons){
             id +=parseInt(position);
             idpic=parseInt(position);
             if(idpic===0){
               idpic+=1;
             }
             let imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+idpic+'.png';
             
               listpokemons[position]=new PokemonObject(1+id,pokemons[position].name,pokemons[position].url,imgUrl);
               id=0;
               idpic=0;
               console.log(listpokemons[position]);
        
            }
        return listpokemons;
      }



    

      export default Pokemon;