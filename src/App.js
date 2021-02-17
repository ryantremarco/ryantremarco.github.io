import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

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
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route path={["/about", "/dev", "/misc"]} component={ComingSoon}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
