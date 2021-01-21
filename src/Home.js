    import './App.css';
    import { Component } from 'react';
    import pokeapi from './pokeapi';
    import  Pokemon  from './Pokemon';

    
  let id=9;

    class Home extends Component{
    
    
      state={
        pokemons:[],
        pokemon:[]
      }
   
      
      async componentDidMount(){

     
        const response =await pokeapi.get('/');
        this.setState({pokemons:response.data});

    
        const response2 = await pokeapi.get('/'+2);


       
      
        

       
        this.setState({pokemon:response2.data})
        
      
      }

   
    

      render(){
      const {pokemons}=this.state;
      const {pokemon}=this.state;





  

    


    let a = Pokemon(pokemons.results);
  

    console.log(a);
  
    async function n(a) {
      for(var i in a){
        const response2 = await pokeapi.get('/'+i);

        this.setState({pokemon:response2.data});
        console.log(response2.data);
      }
    }

  //n(a);

            



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