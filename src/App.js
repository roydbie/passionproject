import React from 'react';
import './App.css';

import BottomNav from './components/BottomNav';
import Header from './components/Header';
import TabsZelf from './components/TabsZelf';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <h1>homepage</h1>
            </Route>
            <Route exact path="/exercises">
              <TabsZelf />
            </Route>
            <Route exact path="/progress">
              <h1>progress</h1>
            </Route>
            <Route exact path="/extra">
              <h1>extra</h1>
            </Route>
          </Switch>
          <BottomNav />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;