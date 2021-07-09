import React from 'react';
import { Route } from 'react-router-dom';
import FormPlayer from './form';
import './App.css';
import Scoreboard from './scoreboard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={FormPlayer}/>
        <Route path = '/:scoreboard' component={Scoreboard} />
      </header>
    </div>
  );
}

export default App;
