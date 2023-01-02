import React,{useState} from 'react'
import Background from './Components/Background'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Pages/Home';
import Game from './Pages/Game';
import About from './Pages/About';

const App = () => {
  return (
    <Background>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Switch>
    </Background>
  );
}

export default App;
