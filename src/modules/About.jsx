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

        <p>Cameron Shafii is an Iranian composer practicing electronic and
        electroacoustic music. His compositions are inflected with a host of
        digital synthesis processes and are informed by aspects of acousmatic
        theory, particularly spectromorphology. His works do not impose any
        temporal scheme upon the listener - rejecting the semiotic operation of
        'engagement/disengagement'. ‘Pithy & Prolix’ and ‘Corpora Vilia’ - two
        forthcoming full-length albums for the Anòmia and Conditional labels - present
        asymmetrical narratives that articulate tension, amorphous forms, and
        complex sonorities, signifiying a plurality of meaning and complication.</p>

        <p>Shafii has performed at concerts, festivals, and workshops, and has
        exhibited installations in the US and Canada. He runs the Ge-stell label 
        and is based in Philadelphia, where he is pursuing a Ph.D. in German at the 
        University of Pennsylvania.</p>
      </section>
    );
  }
}
