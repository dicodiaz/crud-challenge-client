import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './hooks/home/Home';
import DriversList from './hooks/list/DriversList';
import CustomersList from './hooks/list/CustomersList';
import CarsList from './hooks/list/CarsList';
import RidesList from './hooks/list/RidesList';
import DriverCreate from './hooks/create/DriverCreate';
import DriverSearch from './hooks/search/DriverSearch';
import DriverEdit from './hooks/edit/DriverEdit';
import DriverDelete from './hooks/delete/DriverDelete';
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
        <Route exact path="/drivers/edit" component={DriverEdit} />
        <Route exact path="/drivers/delete" component={DriverDelete} />
      </Switch>
    </Router>
  );
}

export default App;
