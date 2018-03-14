import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import About from './modules/About';
import Contact from './modules/Contact';
import Home from './modules/Home';
import Performances from './modules/Performances';
import Releases from './modules/Releases';
import Video from './modules/Video';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <header>
              <h1>
                <Link to="/">Cameron Shafii</Link>
              </h1>
            </header>
            <div className="app">
              <nav>
                <Link to="/releases">Releases</Link>
                <Link to="/performances">Performances</Link>
                <Link to="/video">Video</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <Route exact path="/" component={Home} />
              <Route path="/releases" component={Releases} />
              <Route path="/performances" component={Performances} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/video" component={Video} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
