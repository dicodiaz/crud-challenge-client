import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './hooks/home/Home';
import DriversList from './hooks/lists/DriversList';
import CustomersList from './hooks/lists/CustomersList';
import CarsList from './hooks/lists/CarsList';
import RidesList from './hooks/lists/RidesList';
import DriverCreate from './hooks/create/DriverCreate';
import DriverSearch from './hooks/search/DriverSearch';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/drivers/list" component={DriversList} />
        <Route exact path="/customers/list" component={CustomersList} />
        <Route exact path="/cars/list" component={CarsList} />
        <Route exact path="/rides/list" component={RidesList} />
        <Route exact path="/drivers/create" component={DriverCreate} />
        <Route exact path="/drivers/search" component={DriverSearch} />
      </Switch>
    </Router>
  );
}

export default App;
