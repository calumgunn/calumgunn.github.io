import React, { PureComponent } from 'react';
import Image01 from '../../images/CorporaVilia-1.JPG';
import Image02 from '../../images/CorporaVilia-2.JPG';
import Image03 from '../../images/CorporaVilia-3.JPG';
import Image04 from '../../images/CorporaVilia-4.JPG';
import { Helmet } from 'react-helmet';

export default class CorporaVilia extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Corpora Vilia | Cameron Shafii</title>
          <meta name="description" content="Corpora Vilia, a 2019 album by Cameron Shafii." />
        </Helmet>

        <h1>Corpora Vilia</h1>

        <p>Label: Conditional<br />
        Catalog Number: CON021<br />
        Format: CD, Album<br />
        Country: Germany<br />
        Release Date: 2019</p>

        <h3>Tracklist:</h3>

        <p>
          01  Points and Planes of Potential Future Violations [11:32]<br />
          02  Text 27 (Lise ein Fernsehspiel) [22:51]<br />
          03  Spatial Envy; or Suture and Cut-Pieces [23:58]
        </p>

        <p>Mastered by Noel Summerville at 3345 Mastering, London.</p>

        <p>Special thanks to Calum Gunn, Kevin Drumm, Joe Gilmore, and Kirsten Thom.</p>

        <iframe title="Corpora Vilia" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/510363615%3Fsecret_token%3Ds-cSQa0&color=%23050000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"></iframe>

        <img src={Image01} alt="Corpora Vilia" />
        <img src={Image02} alt="Corpora Vilia" />
        <img src={Image03} alt="Corpora Vilia" />
        <img src={Image04} alt="Corpora Vilia" />
      </section>
    );
  }
}
