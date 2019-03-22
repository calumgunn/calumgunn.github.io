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

      </section>
    );
  }
}
