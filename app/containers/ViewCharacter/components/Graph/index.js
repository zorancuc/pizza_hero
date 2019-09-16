import React from 'react';

export default function Graph() {
  return (
    <div className="price-graph">
      <div className="price-info-top">
        <div className="div-block-7-copy">
          <div>Buy now price</div>
          <div className="div-block-8">
            <img
              src="/tron-icon-red.svg"
              width="20"
              alt=""
              className="image-5"
            />
            <div className="text-block-6">200 TRX</div>
          </div>
        </div>
        <a href="/#" className="cancel-sale-button w-inline-block">
          <div>Cancel Sale</div>
        </a>
      </div>
      <img
        src="/Screen-Shot-2019-05-02-at-10.39.57-PM.jpg"
        srcSet="/Screen-Shot-2019-05-02-at-10.39.57-PM-p-500.jpeg 500w, /Screen-Shot-2019-05-02-at-10.39.57-PM-p-800.jpeg 800w, /Screen-Shot-2019-05-02-at-10.39.57-PM-p-1080.jpeg 1080w, /Screen-Shot-2019-05-02-at-10.39.57-PM.jpg 1494w"
        sizes="100vw"
        alt=""
        className="image-6"
      />
      <div className="price-info-top">
        <div className="div-block-7">
          <div className="text-block-7">Started at</div>
          <div className="div-block-8">
            <img
              src="/tron-icon-red.svg"
              width="20"
              alt=""
              className="image-5"
            />
            <div className="text-block-6">620 TRX</div>
          </div>
        </div>
        <div className="div-block-7">
          <div className="text-block-7">Price goes to</div>
          <div className="div-block-8">
            <img
              src="/tron-icon-red.svg"
              width="20"
              alt=""
              className="image-5"
            />
            <div className="text-block-6">100 TRX</div>
          </div>
        </div>
      </div>
    </div>
  );
}
