import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

export default class CorporaVilia extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Corpora Vilia | Cameron Shafii</title>
          <meta name="description" content="Corpora Vilia, a 2018 album by Cameron Shafii." />
        </Helmet>

        <h1>Corpora Vilia</h1>

        <p>Label: Conditional<br />
        Catalog Number: CON019<br />
        Format: CD, Album<br />
        Country: Germany<br />
        Release Date: 2018</p>

        <h3>Tracklist:</h3>

        <p>
          01  Points and Planes of Potential Future Violations [11:32]<br />
          02  Text 27 (Lise ein Fernsehspiel) [22:51]<br />
          03  Spatial Envy; or Suture and Cut-Pieces [23:58]
        </p>

        <p>Mastered by Noel Summerville at 3345 Mastering, London.</p>

        <p>Special thanks to Calum Gunn, Kevin Drumm, Joe Gilmore, and Kirsten Thom.</p>
      </section>
    );
  }
}
