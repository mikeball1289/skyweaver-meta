import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom';
import DecksPage from '../../pages/Decks/DecksPage'
import ConstructedCardsPage from '../../pages/ConstructedCards/ConstructedCardsPage'
import DiscoveryCardsPage from '../../pages/DiscoveryCards/DiscoveryCardsPage';
import './App.css';

const App = () => {
    return (
        <div>
            <Router>
                <Link to='/decks'>Decks</Link>
                <span className='App-divider'>|</span>
                <Link to='/constructed'>Constructed</Link>
                <span className='App-divider'>|</span>
                <Link to='/discovery'>Discovery</Link>

                <Switch>
                    <Route default path='/decks' component={ DecksPage }/>
                    <Route path='/constructed' component={ ConstructedCardsPage }/>
                    <Route path='/discovery' component={ DiscoveryCardsPage }/>
                    <Route path='/' render={() =>
                        <Redirect to='/decks' />
                    } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
