import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

export default class Contact extends PureComponent {
  render() {
    return (
      <section>
        <Helmet>
          <title>Contact | Cameron Shafii</title>
          <meta name="description" content="Contact Cameron Shafii via email." />
        </Helmet>

        <h1>Contact</h1>

        <p>For all queries, please contact Cameron via email at <a href="mailto:info@ge-stell.net">info@ge-stell.net</a>.</p>
      </section>
    );
  }
}
