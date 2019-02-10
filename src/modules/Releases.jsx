import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default class Releases extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Releases | Cameron Shafii</title>
          <meta name="description" content="Past and upcoming releases by Cameron Shafii." />
        </Helmet>

        <h1>Releases</h1>

        <h3>Solo Albums:</h3>

        <p>
          <Link to="/releases/dzgl">
            DzGl — Anòmia, 2015
          </Link>
        </p>
        <p>
          <Link to="/releases/pithy-and-prolix">
            Pithy & Prolix — Anòmia, 2019
          </Link>
        </p>
        <p>
          <Link to="/releases/corpora-vilia">
            Corpora Vilia — Conditional, 2019
          </Link>
        </p>

        <h3>Collaborations and Compilations:</h3>

        <p>Sutekh Hexen - Breed in Me The Darkness: The Second Coming Mixes by Andrew Liles — Aurora Borealis, 2012</p>
        <p>Sutekh Hexen - Monument of Decay — Black Horizons, 2013</p>
        <p>Quark: How Does The Invisible Sound? [Q11] — 901 Editions, 2016</p>
      </section>
    );
  }
}
