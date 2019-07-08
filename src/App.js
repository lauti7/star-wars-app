import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import CharactersContainer from './components/CharactersContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/personajes" component={CharactersContainer} />
          <Route path="/favoritos" component={CharactersContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
