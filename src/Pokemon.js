var PokemonObject = function(id,name,url){
    this.id=id;
    this.name=name;
    this.url=url;
    }
    const listpokemons =[];
 const Pokemon=  function (pokemons){
     var id=parseInt(0);
        for(var position in pokemons){
             id +=parseInt(position);
            
               listpokemons[position]=new PokemonObject(1+id,pokemons[position].name,pokemons[position].url);
               id=0;
               console.log(listpokemons[position]);
        }
        return listpokemons;
      }



    

      export default Pokemon;