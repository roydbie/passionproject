import React from 'react';
import './App.css';

import BottomNav from './components/BottomNav';
import Header from './components/Header';
import TabsZelf from './components/TabsZelf';
import TabsHomepage from './components/TabsHomepage';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chart from './components/Chart';
import Chart2 from './components/Chart2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/passionproject/" >
              <TabsHomepage />
            </Route>
            <Route exact path="/passionproject/exercises">
              <TabsZelf />
            </Route>
            <Route exact path="/passionproject/progress">
              <br></br><br></br><br></br><h1>progress</h1>
              <Chart /><br></br><br></br>
              <Chart2 />
            </Route>
            <Route exact path="/passionproject/extra">
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
