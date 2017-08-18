import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Scroll from './Scroll';
import Still from './Still';
import picData from '../picData';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      pics: picData
    };
  }

  render () {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' render={props => <Still pics={this.state.pics} {...props} />}
            />
            <Route exact path='/slideshow' render={props =>
              <Scroll
                pics={this.state.pics}
                prev={this.prev}
                next={this.next}
                {...props} />}
            />
            <Route render={function () {
              return <p>404 Not Found</p>;
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
