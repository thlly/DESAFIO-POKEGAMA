import './App.css';
  import { Component } from 'react';
  import pokeapi from './pokeapi';
  import Pokemon from './Pokemon'
  import Pokemons from './pokemons';
  import axios from 'axios';

  




  class Home extends Component{

    state={
      pokemons:[],
      pokemon:[]
    }
   

    async componentDidMount(){
      const response =await pokeapi.get('/');
     
      

      this.setState({pokemons:response.data});
     const getPokemonInfo = async id =>{
        const url= 
        await `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        //console.log(pokemon);
        this.setState({pokemon:pokemon});
    
    
      }
      getPokemonInfo(1);
    }

    


    render(){
    const {pokemons}=this.state;
    const {pokemon}=this.state;
    
  console.log(pokemon);
 


  


  let a = Pokemon(pokemons.results);
  
  

 

           



      return(
      
        <div>
        <h1>Listar pokemons</h1>
        {a.map(pokemon => (
          <li key={pokemon.id}>
                <h1>{pokemon.name}</h1>
                <h3>{pokemon.url}</h3>
                
                <img src={pokemon.urlPhoto}/>
                
                

            </li>
        ))}

        
        
        
      </div>
      )

    }
    
  }






  export default Home;
