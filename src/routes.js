import React from 'react';
import { Switch,BrowserRouter, Route }from 'react-router-dom';
import Pokemons from './pokemons';
import Home from './Home';

export default function Routes(){
    return(
<BrowserRouter>
<Switch>
    <Route path='/' exact component={Home}/>
<Route path='./pokemons' component={Pokemons}/>
</Switch>
</BrowserRouter>

    
    )

}


