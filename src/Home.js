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
    

    /*const allpokemons = response.data.results;
    for(var position in allpokemons){
        console.log(allpokemons[position].name);
    }*/
    //console.log(allpokemons);
    this.setState({pokemons:response.data.results});
  }

  render(){
  const {pokemons}=this.state;


//Pokemon(pokemons);


let a = Pokemon(pokemons);
console.log(a);
 




    return(
      <div>
        <h1>Listar pokemons</h1>
        {a.map(pokemon => (
          <li key={pokemon.id}>
                <h1>{pokemon.name}</h1>
                <h3>{pokemon.url}</h3>

            </li>
        ))}

         
        
        
      </div>
    )

  }
  
}







export default Home;