import React, { PureComponent } from 'react';
import Cameron from '../CS-Suzy_Poling.jpg';

export default class About extends PureComponent {
  render() {
    return (
      <section>
        <h1>About</h1>

        <img src={Cameron} alt="Cameron Shafii" />

        <p>Cameron Shafii is an Iranian composer practicing generative and
        electroacoustic music. His compositions are inflected with a host of
        digital synthesis processes and are informed by aspects of acousmatic
        theory, particularly spectromorphology. His works do not impose any
        temporal scheme upon the listener - rejecting the semiotic operation of
        'engagement/disengagement'.</p>

        <p>'Pithy & Prolix' - his forthcoming piece for the Anòmia label -
        features sound scenes that emphasize the materiality and morphology of
        spatial textures. In it, Shafii presents an asymmetrical narrative that
        articulates tension, amorphous forms, and complex sonorities,
        signifying a plurality of meaning and complication.</p>

        <p>Shafii has performed at concerts, festivals, installations, and
        workshops in the US and Canada, and has collaborated on an ongoing
        basis with dancer Beth Graczyk. He runs the Ge-stell label and is based
        in Durham, North Carolina.</p>
      </section>
    );
  }
}
