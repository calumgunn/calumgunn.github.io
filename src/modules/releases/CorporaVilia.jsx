import React, { PureComponent } from 'react';

export default class CorporaVilia extends PureComponent {
  render() {
    return (
      <section>
        <h1>Corpora Vilia</h1>

        <p>Label: Conditional<br />
        Catalog Number: CON018<br />
        Format: CD, Album<br />
        Country: Germany<br />
        Release Date: 2018</p>

        <h3>Tracklist:</h3>

        <p>
          01 Points and Planes of Potential Future Violations [11:32]<br />
          02 Text 27 (Lise ein Fernsehspiel) [22:51]<br />
          03 Spatial Envy; or Suture and Cut-Pieces [23:58]
        </p>

        <p>Mastered by Noel Summerville at 3345 Mastering, London.</p>

        <p>This recording was made possible with generous support from the
        Renaissance Society at the University of Chicago and Slought Foundation
        at the University of Pennsylvania. Special thanks to Calum Gunn,
        Kirsten Thom, Kevin Drumm, and my cat, Lacora.</p>
      </section>
    );
  }
}
