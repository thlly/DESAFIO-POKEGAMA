let pokemonlist =[];
      let PokemonObject = function(id,name){
        this.id=id;
        this.name=name;


        };

        function fillListPokemon(pokemon){
          pokemonlist =new PokemonObject(pokemon.name,pokemon.id);
      return pokemonlist;
        }

   


export default fillListPokemon;
