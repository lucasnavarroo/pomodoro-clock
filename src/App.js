import React, { Component } from "react";
import "./App.css";
import Timer from "./Components/Timer";
import Grid  from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Timer />
        </Grid>
      </div>
    );
  }
}

export default App;
