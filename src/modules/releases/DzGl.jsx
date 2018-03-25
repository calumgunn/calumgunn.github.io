import React, { PureComponent } from 'react';
import Image01 from '../../images/ANM019-Cameron-Shafii01.jpg';
import Image02 from '../../images/ANM019-Cameron-Shafii02.jpg';
import Image03 from '../../images/ANM019-Cameron-Shafii03.jpg';
import Image04 from '../../images/ANM019-Cameron-Shafii04.jpg';
import Image05 from '../../images/ANM019-Cameron-Shafii05.jpg';

export default class DzGl extends PureComponent {
  render() {
    return (
      <section>
        <h1>DzGl</h1>

        <p>Label: Anòmia<br />
        Catalog Number: ANM019<br />
        Format: Cassette, Album<br />
        Country: Spain<br />
        Release Date: 2015</p>

        <h3>Tracklist:</h3>

        <p>
          A1  iDfferezn [01:02]<br />
          A2  eniDezffr [05:56]<br />
          A3  nDifreezf [01:46]<br />
          A4  znerDeffi [00:07]<br />
          A5  rnDfeifze [02:14]<br />
          A6  Differenz [01:58]<br />
          B1  gnuecighl [08:31]<br />
          B2  eigcghunl [03:03]<br />
          B3  Gleichung [01:27]
        </p>

        <p>DzGl (abbr. Differenzengleichung) are a series of nine contrasting
        computer-based approximations of integers in recurrence relations.</p>

        <p>In discrete mathematics, recurrence relations are the analog of
        differential equations, equations that involve the derivatives of
        functions as well as the function itself. The sonification of datasets
        and algorithms in these pieces produce compositions that are
        non-linear, complementary, and self-similar.</p>

        <p>Tracks A1, A3 through B1 and B3 are for unattended computer. Tracks
        A2 and B1 are for piano two- and four-hands with minimal digital signal
        processing and electronic treatment. Track A6 refactors Tom Erbe’s code
        base to regenerate James Tenney’s piece ‘For Ann (Rising)’, iterating
        on each Shepard-Risset glissando.</p>

        <p>Mastered by Rashad Becker at D&M, Berlin.</p>

        <p>Special thanks to Arnau Sala Saez, Rashad Becker, Joe Gilmore,
        Elaine Jones, and Marcus Schmickler.</p>

        <iframe width="100%" height="300" scrolling="no" frameborder="no"
          title="DzGl"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/170972326&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>

        <img src={Image01} alt="DzGl" />
        <img src={Image02} alt="DzGl" />
        <img src={Image03} alt="DzGl" />
        <img src={Image04} alt="DzGl" />
        <img src={Image05} alt="DzGl" />
      </section>
    );
  }
}
