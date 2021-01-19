import './App.css';
import pokeapi from './pokeapi';
import { Component } from 'react';




class App extends Component{

  state={
    pokemons:[],
  }
  async componentDidMount(){
    const response =await pokeapi.get('');

    
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








export default App;
