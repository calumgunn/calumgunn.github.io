import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

export default class PithyProlix extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Pithy & Prolix | Cameron Shafii</title>
          <meta name="description" content="Pithy & Prolix, a 2019 album by Cameron Shafii." />
        </Helmet>

        <h1>Pithy & Prolix</h1>

        <p>Label: Anòmia<br />
        Catalog Number: ANM049<br />
        Format: CD/DL, Album<br />
        Country: Spain<br />
        Release Date: 2019</p>

        <h3>Tracklist:</h3>

        <p>01  Pithy & Prolix [40:48]</p>

        <p>Mastered by Noel Summerville at 3345 Mastering, London.</p>

        <p>Special thanks to Arnau Sala Saez, Kevin Drumm, and Kirsten Thom.</p>
      </section>
    );
  }
}
