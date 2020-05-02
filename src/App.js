import React from 'react';
import './App.css';
import EggShelf from "./component/eggshelf"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="home">
              <div className="header-container">
                  <img className="logo" src={"logo.png"} alt="logo"/>

                  <nav>
                      <ul>
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li>
                              <Link to="/eggs">Eggs</Link>
                          </li>
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                      </ul>
                  </nav>
              </div>



              <Switch>
                  <Route path="/eggs" component={EggShelf}>
                  </Route>

                  <Route path="/"></Route>
                  <Route path="/about"></Route>
              </Switch>
          </div>
      </Router>
    // <div className="App">
    // </div>
  );
}

export default App;
