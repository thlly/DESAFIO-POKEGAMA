import {useHistory} from 'react-router-dom';
import './App.css';
import { Component } from 'react';
import pokeapi from './pokeapi';
import Pokemon from './Pokemon'
import Pokemons from './pokemons';



class Home extends Component{

  state={
    pokemons:[],
  }
  async componentDidMount(){
    const response =await pokeapi.get('');
    

    this.setState({pokemons:response.data.results});
  }

  render(){
  const {pokemons}=this.state;





let a = Pokemon(pokemons);
console.log(a);
let id;




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