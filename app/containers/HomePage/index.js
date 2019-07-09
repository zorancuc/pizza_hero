/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';

import Hero from './components/Hero';
import PreSale from './components/PreSale';
import Referral from './components/Referral';
import UnboxedItems from './components/UnboxedItems';

import '!file-loader?name=[name].[ext]!../../images/play.svg';
import '!file-loader?name=[name].[ext]!../../images/blue-chest.png';
import '!file-loader?name=[name].[ext]!../../images/purple-chest.png';
import '!file-loader?name=[name].[ext]!../../images/gold-chest.png';
import '!file-loader?name=[name].[ext]!../../images/white-chest.png';
import '!file-loader?name=[name].[ext]!../../images/tron-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/hat_1hat.png';
import '!file-loader?name=[name].[ext]!../../images/armor_1armor.png';
import '!file-loader?name=[name].[ext]!../../images/crown_1crown.png';
import '!file-loader?name=[name].[ext]!../../images/unboxed-item.png';
import Treasure from './components/Treasure';

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
  }, []);

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Hero />
        <PreSale />
        <Referral />
        <UnboxedItems />
        <Treasure prizeTotal={2493} />
      </div>
    </article>
  );
}

export default HomePage;
