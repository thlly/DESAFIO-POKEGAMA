        import React,{useState,useEffect} from 'react';
        import getAllPokemon,{getPokemon} from './pokeapi';
        import Card from './componentes/Card/Card';
        import{Link, NavLink} from 'react-router-dom';
        import ReactDOM, { render } from 'react-dom';



          function Home(){
            const [seachterm,setSeachTerm]=useState("");


        
            
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

            _pokemonData.avaliable=true;
                  setPokemonData(_pokemonData);

                              

            };


       



            return(

          
            <div>
              
                           <div className="seach"> 
                           <input type="text"
                            placeholder="Pesquisar Pokemon"
                            onChange={event=>{
                              setSeachTerm(event.target.value)
                              }}
                              />
                           {pokemonData.filter((pokemon)=>{
                             if(seachterm==""){
                               return pokemon;
                             }else if(pokemon.name.toLowerCase().includes(seachterm.toLowerCase())){
                               return pokemon;
                             }
                           }).map((pokemon,key)=>{
                        
                         
                               return  <Card key={key} pokemon={pokemon}/>
                          
                        
                           })}
                           </div>
      
              {loading ?<img src="\_charmeleon.gif"></img>:(
              <>

          <div className="btn">

            <button className="button-pagination" onClick={prev}>Anterior</button>
            <button className="button-pagination" onClick={next}>Próximo</button>

          </div>
 
              
    <Link to="/meuspokemon"><button className="meus-pokemon">Meus Pokemon</button></Link>
              <div className="grid-container">
              
            {pokemonData.map((pokemon,i)=>{
      
                  pokemon.avaliable=true;
             

            
              
            
          
                
            })}

          </div>

              
            
              </>
              
              )}
                  
              </div>);
          
    
          }




            export default Home;
