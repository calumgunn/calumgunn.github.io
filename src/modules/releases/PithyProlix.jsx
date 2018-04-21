import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

export default class PithyProlix extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Pithy & Prolix | Cameron Shafii</title>
          <meta name="description" content="Pithy & Prolix, a 2018 album by Cameron Shafii." />
        </Helmet>

        <h1>Pithy & Prolix</h1>

        <p>Label: Anòmia<br />
        Catalog Number: ANM050<br />
        Format: CD, Album<br />
        Country: Spain<br />
        Release Date: 2018</p>

        <h3>Tracklist:</h3>

        <p>01 Pithy & Prolix [40:48]</p>

        <p>i. kreischen schreien zersplittertes glas, Op. 37<br />
        ii. Qui parle<br />
        iii. Infiltration homogène pour piano à droit<br />
        iv. Mouvement (un nœud de significations vivantes)<br />
        v. The theory of the body is already a theory of perception<br />
        vi. Postludium</p>

        <p>Mastered by Noel Summerville at 3345 Mastering, London.</p>

        <p>Special thanks to Kirsten Thom, Arnau Sala Saez, Noel Summerville,
        Kevin Drumm, RM Francis, Joe Gilmore, and John Wall.</p>
      </section>
    );
  }
}
