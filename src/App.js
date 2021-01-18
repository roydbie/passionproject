import React from 'react';
import './App.css';

import BottomNav from './components/BottomNav';
import Header from './components/Header';
import TabsZelf from './components/TabsZelf';
import TabsZelfPersonal from './components/personal-page/TabsZelf';
import HomepageCard from './components/HomepageCard';

import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chart from './components/Chart';
import Chart2 from './components/Chart2';

import Location from './components/Location';
import Maps from './components/Maps';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/passionproject/personal" >
              <TabsZelfPersonal />
            </Route>
            <Route exact path="/passionproject/" >
              <br></br><br></br><br></br><br></br><br></br><br></br>
              <HomepageCard />
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
              <br></br><br></br><br></br>
              <Maps />
            </Route>
            <Route exact path="/passionproject/test">
              <br></br><br></br><br></br><br></br><br></br><br></br>
              <Maps />
            </Route>
          </Switch>
          <BottomNav />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
