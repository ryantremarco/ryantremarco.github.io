import React from 'react';
import Home from "./pages/home";

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
      <Home/>
    </div>
  );
}

export default App;
