import React, { PureComponent } from 'react';
import Cameron from '../CS-Suzy_Poling.jpg';
import { Helmet } from 'react-helmet';

export default class About extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>About | Cameron Shafii</title>
          <meta name="description" content="Cameron Shafii is an Iranian composer practicing electronic and electroacoustic music. His compositions are inflected with a host of digital synthesis processes and are informed by aspects of acousmatic theory, particularly spectromorphology." />
        </Helmet>
        <h1>About</h1>

        <img src={Cameron} alt="Cameron Shafii" />

        <p>Cameron Shafii is an Iranian composer practicing electronic and electroacoustic music. His compositions are inflected with a host of digital synthesis processes and are informed by aspects of acousmatic theory, particularly spectromorphology. Many of his compositions have been published by Anòmia (2015; 2019) and Conditional (2019). He runs the Ge-stell label and is based in Philadelphia, where he is pursuing a Ph.D. in Germanic Languages and Literatures and the History of Art at the University of Pennsylvania.</p>

        <h3>Selected Press:</h3>
        
        <p>"A disjointed vulgarity characterises the music of Cameron Shafii. Currently pursuing a PhD from the University of Pennsylvania in Germanic Languages and Art History, the Iranian composer approaches contemporary composition with a kind of surgical precision that’s overwrought with frenetic academic criticality. On 'Corpora Vilia‘ (the Latin plural of the term corpus vile, used to refer to expendable bodies for experimentation) Shafii boldly segments and slices through samples and recordings, which are subsequently spliced back together and spatialised into timbres that pan through a maladaptive emotional spectrum. Composites of brief glints of orchestral music and fragmented German speech rake through fields of tones that span from oppressively high-pitched ringing to airy, bellowing drone." — <i>The Wire</i></p>

        <p>"…In three durational parts, Shafii presents a wealth of micro-edited sounds arranged into radical synthetic symphonies. Structured around deeply uncanny transitions between acoustic and digital spheres, they each reveal inception-like worlds within worlds, using every integer of the sound field to draw ears between his spectral presences and pointillist acoustic strikes with a quietly breathtaking grasp of proprioceptive chicanery…." — <i>Boomkat</i></p>
        
        <p>"The Iranian composer Cameron Shafii’s long had a knack for twisting around traditional instrumentation and erratic electronic abstractions, but Corpora Vilia is especially gnarly. These new compositions are piercing, chaotic, and programatic, like an orchestra staffed entirely by those mechanical bees from that one Black Mirror episode. Head-splitting synthesis and organic instrumentation swirl around one another in pleasantly prickly arrangements, competing for your attention, across big black background silence and void. It’s a shockingly heavy listen, for how few moving parts there are—you’ll want to steel yourself before you play this one." — <i>Thump (Vice)</i></p>

        <p>"A deft awareness of scale and form characterises this nifty release from Iranian sound artist Cameron Shafii, which blends intricate computer sounds with carved-up orchestra samples to create rigorous and supple compositions. Shafii’s ability to fold the swoops and jabs of his acoustic sources into crunchy digital textures makes for a wondrous hybridity and gives ‘Corpora Vilia’ the perception-warping feel of a dream vision…" — <i>We Need No Swords</i></p>
          
      </section>
    );
  }
}
