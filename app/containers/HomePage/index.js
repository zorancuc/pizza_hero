/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
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
import '!file-loader?name=[name].[ext]!../../images/blockchain-icon_1blockchain-icon.png';
import '!file-loader?name=[name].[ext]!../../images/activities-icon_1activities-icon.png';
import '!file-loader?name=[name].[ext]!../../images/rare-items-icon_1rare-items-icon.png';
import '!file-loader?name=[name].[ext]!../../images/trx-icon_1trx-icon.png';
import '!file-loader?name=[name].[ext]!../../images/heirloom_1heirloom.png';
import '!file-loader?name=[name].[ext]!../../images/legendary_1legendary.png';
import '!file-loader?name=[name].[ext]!../../images/epic_1epic.png';
import '!file-loader?name=[name].[ext]!../../images/rare_1rare.png';
import '!file-loader?name=[name].[ext]!../../images/uncommon_1uncommon.png';
import '!file-loader?name=[name].[ext]!../../images/common_1common.png';
import '!file-loader?name=[name].[ext]!../../images/breeding_1breeding.png';
import '!file-loader?name=[name].[ext]!../../images/treasure_1treasure.png';
import '!file-loader?name=[name].[ext]!../../images/crafting_1crafting.png';
import '!file-loader?name=[name].[ext]!../../images/guilds_1guilds.png';
import '!file-loader?name=[name].[ext]!../../images/marketplace_1marketplace.png';
import '!file-loader?name=[name].[ext]!../../images/upgrades_1upgrades.png';
import '!file-loader?name=[name].[ext]!../../images/season_1season.png';
import '!file-loader?name=[name].[ext]!../../images/tronlink.png';
import '!file-loader?name=[name].[ext]!../../images/coinbase.png';
import '!file-loader?name=[name].[ext]!../../images/trust.png';
import '!file-loader?name=[name].[ext]!../../images/right-arrow_1right-arrow.png';
import '!file-loader?name=[name].[ext]!../../images/divider-left-p-500.png';
import '!file-loader?name=[name].[ext]!../../images/divider-left.png';
import '!file-loader?name=[name].[ext]!../../images/divider-right-p-500.png';
import '!file-loader?name=[name].[ext]!../../images/divider-right.png';

const key = 'home';

function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Pizza Heroes application homepage" />
      </Helmet>
      <div>
        <Hero />
        <PreSale />
        <Referral />
        <UnboxedItems />
        <Treasure prizeTotal={2493} />
        <About />
        <ItemRarities />
        <Features />
        <GettingStarted />
      </div>
    </article>
  );
}

export default HomePage;
