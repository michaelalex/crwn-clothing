import React from "react";
import { Switch, Route } from 'react-router-dom';

import "./App.css";
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (<h1>HATS</h1>);
};

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
);

export default App;
