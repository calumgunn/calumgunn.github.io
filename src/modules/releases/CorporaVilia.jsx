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

        <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3118419645/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://shop.conditional.club/album/corpora-vilia">Corpora Vilia by Cameron Shafii</a></iframe>

        <img src={Image01} alt="Corpora Vilia" />
        <img src={Image02} alt="Corpora Vilia" />
        <img src={Image03} alt="Corpora Vilia" />
        <img src={Image04} alt="Corpora Vilia" />
      </section>
    );
  }
}
