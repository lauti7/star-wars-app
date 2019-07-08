import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu'
import CharactersContainer from './components/CharactersContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/personajes" component={CharactersContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
