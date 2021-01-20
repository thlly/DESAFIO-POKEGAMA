import './App.css';
import { Component } from 'react';
import pokeapi from './pokeapi';



class Pokemons extends Component{

  state={
    pokemons:[],
  }
  async componentDidMount(){
    const response =await pokeapi.get('');
    

    const allpokemons = response.data;
    console.log(allpokemons);
    this.setState({pokemons:response.data});
  }

  render(){
  const {pokemons}=this.state;

 
    return(
      <div>
        <h1>Listar pokemons</h1>
        {console.log(pokemons)}
        
        
      </div>
    )

  }
  
}








export default Pokemons;
