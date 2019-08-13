import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Item from './Item';

const responsive = {
  0: {
    items: 2,
  },
  500: {
    items: 3,
  },
  676: {
    items: 4,
  },
  767: {
    items: 3,
  },
  1023: {
    items: 4,
  },
  1200: {
    items: 5,
  },
};

export default function UnboxedItems() {
  let Carousel = null;
  const slidePrev = e => {
    e.preventDefault();
    Carousel.slidePrev();
  };
  const slideNext = e => {
    e.preventDefault();
    Carousel.slideNext();
  };

  return (
    <div className="section latest-unboxed-items-section">
      <div className="container">
        <h2
          data-text="pre-sale exclusive"
          className="latest-unboxed-items-heading"
        >
          Latest Unboxed Items
        </h2>
        <div className="slider w-slider">
          <AliceCarousel
            mouseDragEnabled
            buttonsDisabled
            dotsDisabled
            responsive={responsive}
            ref={/* eslint no-return-assign: "error" */ el => (Carousel = el)}
          >
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="5 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="10 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="15 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="20 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="30 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="45 minutes"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 hour"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="2 hours"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 hours"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="5 hours"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 day"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="2 days"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="3 days"
            />
            <Item
              image="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/unboxed-item.png"
              unboxedItemId="0x55b4dc..."
              rarity="Rare"
              generation={0}
              chance={22}
              timestamp="1 week"
            />
          </AliceCarousel>
          <a
            href="/#"
            className="slider-arrow-wrapper left w-slider-arrow-left"
            onClick={slidePrev}
          >
            <div className="slider-arrow-icon w-icon-slider-left" />
          </a>
          <a
            href="/#"
            className="slider-arrow-wrapper w-slider-arrow-right"
            onClick={slideNext}
          >
            <div className="slider-arrow-icon w-icon-slider-right" />
          </a>
          <div className="slide-nav w-slider-nav w-round" />
        </div>
      </div>
    </div>
  );
}
