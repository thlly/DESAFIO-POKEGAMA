      import React,{useState,useEffect} from 'react';
      import getAllPokemon,{getPokemon} from './pokeapi';
      import Card from './componentes/Card/Card';
      import{Link} from 'react-router-dom';



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

      const next = async()=>{
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);

      }
      const prev = async()=>{
        if(!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);

      }
          const loadingPokemon= async (data)=>{

              let _pokemonData = await Promise.all(data.map(async pokemon =>{
              let pokemonRecord = await getPokemon(pokemon.url);
              return  pokemonRecord
            }))
                setPokemonData(_pokemonData);
          
            

          };
      
      
        
          return(
          
        
          <div>
                   

            {loading ?<img src="\_charmeleon.gif"></img>:(
            <>

        <div className="btn">

          <button onClick={prev}>Anterior</button>
          <button onClick={next}>Próximo</button>

        </div>
            
    
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
