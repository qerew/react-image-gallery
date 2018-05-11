import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import picData from "../picData";
import Header from "./Header";
import Scroll from "./Scroll";
import Still from "./Still";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pics: picData
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Still pics={this.state.pics} />}
            />
            <Route
              exact
              path="/slideshow"
              render={() => <Scroll pics={this.state.pics} />}
            />
            <Route
              render={function() {
                return <p>404 Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
