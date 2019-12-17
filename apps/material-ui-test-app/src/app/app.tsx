import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/home';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
