import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import DecksPage from '../../pages/Decks/DecksPage'
import CardsPage from '../../pages/Cards/CardsPage'
import PrismsPage from '../../pages/Prisms/PrismsPage'
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Link to='/decks'>Decks</Link>
        <span className='App-divider'>|</span>
        <Link to='/cards'>Cards</Link>
        <span className='App-divider'>|</span>
        <Link to='/prisms'>Prisms</Link>

        <Switch>
          <Route default path='/decks' component={ DecksPage }/>
          <Route path='/cards' component={ CardsPage }/>
          <Route path='/prisms' component={ PrismsPage }/>
          <Route path='/' render={() =>
            <Redirect to='/decks' />
          } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
