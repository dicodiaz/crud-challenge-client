import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './hooks/home/Home';
import DriversList from './hooks/list/DriversList';
import CustomersList from './hooks/list/CustomersList';
import CarsList from './hooks/list/CarsList';
import RidesList from './hooks/list/RidesList';
import DriverRegister from './hooks/register/DriverRegister';
import DriverSearch from './hooks/search/DriverSearch';
import DriverEdit from './hooks/edit/DriverEdit';
import DriverDelete from './hooks/delete/DriverDelete';
import CustomerRegister from './hooks/register/CustomerRegister';
// import CustomerSearch from './hooks/search/CustomerSearch';
// import CustomerEdit from './hooks/edit/CustomerEdit';
// import CustomerDelete from './hooks/delete/CustomerDelete';
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
        <Route exact path="/drivers/register" component={DriverRegister} />
        <Route exact path="/drivers/search" component={DriverSearch} />
        <Route exact path="/drivers/edit" component={DriverEdit} />
        <Route exact path="/drivers/delete" component={DriverDelete} />
        <Route exact path="/customers/register" component={CustomerRegister} />
        {/* <Route exact path="/customers/search" component={CustomerSearch} />
        <Route exact path="/customers/edit" component={CustomerEdit} />
        <Route exact path="/customers/delete" component={CustomerDelete} /> */}
      </Switch>
    </Router>
  );
}

export default App;
