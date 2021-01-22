import React from 'react';
import { Switch,BrowserRouter, Route }from 'react-router-dom';
import Home from './Home';
import MeusPokemon from './PokemonCapturado';


export default function Routes(){
    return(
<BrowserRouter>
<Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/meuspokemon' component={MeusPokemon}></Route>

</Switch>
</BrowserRouter>

    
    )

}


