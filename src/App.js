import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import About from './modules/About';
import Contact from './modules/Contact';
import CorporaVilia from './modules/releases/CorporaVilia';
import DzGl from './modules/releases/DzGl';
import Home from './modules/Home';
import Performances from './modules/Performances';
import PithyProlix from './modules/releases/PithyProlix';
import Releases from './modules/Releases';
import Videos from './modules/Videos';

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
                <Link to="/videos">Videos</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              <Route exact path="/" component={Home} />
              <Route exact path="/releases" component={Releases} />
              <Route exact path="/releases/dzgl" component={DzGl} />
              <Route exact path="/releases/pithy-and-prolix" component={PithyProlix} />
              <Route exact path="/releases/corpora-vilia" component={CorporaVilia} />
              <Route path="/performances" component={Performances} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/videos" component={Videos} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
