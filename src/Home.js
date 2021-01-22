    import React,{useState,useEffect} from 'react';
    import getAllPokemon,{getPokemon} from './pokeapi';
    import Card from './componentes/Card/Card';
let pokemonCapturado=[];

      function Home(){
    
      
        const [pokemonData,setPokemonData]=useState([]);
        const [nextUrl,setNextUrl] =useState('');
        const [prevUrl,setPrevUrl]=useState('');
        const[loading,setLoading]=useState(true);
        const initialUrl='https://pokeapi.co/api/v2/pokemon/';
    useEffect(()=>{
      async function fetchData(){
        let response = await getAllPokemon(initialUrl);
      
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        let pokemon= await loadingPokemon(response.results);
      
        setLoading(false);

      }

      fetchData();

    },[]);
        const loadingPokemon= async (data)=>{

            let _pokemonData = await Promise.all(data.map(async pokemon =>{
            let pokemonRecord = await getPokemon(pokemon.url);
            return  pokemonRecord
          }))
              setPokemonData(_pokemonData);
              pokemonCapturado= _pokemonData;

        };
     
        const [searchTerm, setSearchTerm] = React.useState("");
        const [searchResults, setSearchResults] = React.useState([]);
        const handleChange = event => {
           setSearchTerm(event.target.value);
         };
        React.useEffect(() => {
           const results = pokemonCapturado.filter(person =>
             person.toLowerCase().includes(searchTerm)
           );
           setSearchResults(results);
         }, [searchTerm]);
       

  
        return(
         
       
        <div>
          <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
      {pokemonCapturado.map((pokemon,i)=>{
         
         return  <Card key={i} pokemon={pokemon}/>
     
           
       })}
      </ul>
          
          {loading ?<h1>Loading..</h1>:(
          <>
       
          
   
          <div className="grid-container">
        
        {pokemonData.map((pokemon,i)=>{
         
          return  <Card key={i} pokemon={pokemon}/>
      
            
        })}

      </div>

          
         
          </>
          
          )}
               
          </div>);
      
 
      }




        export default Home;
