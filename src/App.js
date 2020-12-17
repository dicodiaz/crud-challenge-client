import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './hooks/home/Home';
import DriversList from './hooks/lists/DriversList';
// import DriverCreate from './hooks/create/DriverCreate';
import CustomersList from './hooks/lists/CustomersList';
import CarsList from './hooks/lists/CarsList';
import RidesList from './hooks/lists/RidesList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/drivers/list" component={DriversList} />
        {/* <Route path="/drivers/create" component={DriverCreate} /> */}
        <Route path="/customers/list" component={CustomersList} />
        <Route path="/cars/list" component={CarsList} />
        <Route path="/rides/list" component={RidesList} />
      </Switch>
    </Router>
  );
}

export default App;
