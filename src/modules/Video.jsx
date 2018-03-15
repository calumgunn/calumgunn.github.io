import React, { PureComponent } from 'react';
import fitvids from 'fitvids';

export default class Releases extends PureComponent {
  componentDidMount() {
    fitvids();
  }

  render() {
    return (
      <section className="video-container">
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
