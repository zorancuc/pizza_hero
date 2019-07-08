import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const newScript = document.getElementsByClassName('w-json')[0];
    const json = {
      items: [
        {
          type: 'video',
          originalUrl:
            'https://www.youtube.com/watch?v=bRzTwqBk7Ho&autoplay=true',
          url: 'https://www.youtube.com/watch?v=bRzTwqBk7Ho&autoplay=true',
          html:
            '<iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FbRzTwqBk7Ho%3Fautoplay%3D1%26feature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbRzTwqBk7Ho&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FbRzTwqBk7Ho%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&autoplay=1&type=text%2Fhtml&schema=youtube" width="940" height="528" scrolling="no" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true"></iframe>',
          thumbnailUrl: 'https://i.ytimg.com/vi/bRzTwqBk7Ho/hqdefault.jpg',
          width: 940,
          height: 528,
        },
      ],
    };
    const inlineScript = document.createTextNode(JSON.stringify(json));
    newScript.appendChild(inlineScript);
  }, []);

  return (
    <div id="home" className="section hero-section">
      <div className="container hero">
        <div className="hero-content-container">
          <h1 className="main-title">
            Collect.
            <br />
            Play.
            <br />
            Earn.
          </h1>
          <h4 className="main-subtitle">
            Play and earn with digital collectibles.
          </h4>
          <a
            href="#pre-sale"
            className="start-collecting-button w-inline-block"
          >
            <div>start collecting</div>
          </a>
          <div className="watch-trailer-wrapper">
            <a href="/#" className="lightbox-link w-inline-block w-lightbox">
              <div className="watch-trailer-button-wrapper">
                <div className="watch-trailer-circle-border">
                  <div className="watch-trailer-circle">
                    <img src="/play.svg" alt="" />
                  </div>
                </div>
                <div className="watch-trailer-text">Watch trailer</div>
              </div>
              <script type="application/json" className="w-json" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
