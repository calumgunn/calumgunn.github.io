import React, { PureComponent } from 'react';
import fitvids from 'fitvids';
import { Helmet } from 'react-helmet';

export default class Videos extends PureComponent {
  componentDidMount() {
    fitvids();
  }

  render() {
    return (
      <section className="video-container">
        <Helmet>
          <title>Videos | Cameron Shafii</title>
          <meta name="description" content="Video content by Cameron Shafii." />
        </Helmet>

        <h1>Videos</h1>

        <iframe
          src="https://player.vimeo.com/video/259951587"
          title="Cameron Shafii"
          frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>
      </section>
    );
  }
}
