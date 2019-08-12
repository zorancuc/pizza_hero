/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Hero from './components/Hero';
import PreSale from './components/PreSale';
import Referral from './components/Referral';
import UnboxedItems from './components/UnboxedItems';
import Treasure from './components/Treasure';
import About from './components/About';
import ItemRarities from './components/ItemRarities';
import Features from './components/Features';
import GettingStarted from './components/GettingStarted';

import YoutubeVideo from '../../components/YoutubeVideo';

const key = 'home';

function HomePage() {
  const [isOpenVideo, openVideo] = useState(false);
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const openVideoHandler = e => {
    e.preventDefault();
    openVideo(true);
  };
  const closeVideoHandler = e => {
    e.preventDefault();
    openVideo(false);
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Pizza Heroes application homepage" />
      </Helmet>
      <div>
        <Hero openVideo={openVideoHandler} />
        <PreSale />
        <Referral />
        <UnboxedItems />
        <Treasure prizeTotal={2493} />
        <About />
        <ItemRarities />
        <Features />
        <GettingStarted />
      </div>
      {isOpenVideo && <YoutubeVideo close={closeVideoHandler} />}
    </div>
  );
}

export default HomePage;
