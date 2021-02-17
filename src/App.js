import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from './pages/Home/NotFound';

const App = () => {
  const classes = {
    app: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "column",
    }
  }

  return (
    <div style={classes.app}>
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
