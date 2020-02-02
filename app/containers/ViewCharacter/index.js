/* eslint-disable no-underscore-dangle */
import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import {
  makeSelectAccountName,
  makeSelectTronWebState,
} from 'containers/App/selectors';

import ShareDialog from 'components/ShareDialog';
// import FlatButton from 'components/buttons/FlatButton';
import { hero } from 'utils/tronsc';
import ButtonsWrapper from './components/ButtonsWrapper';
// import PropgressBar from './components/ProgressBar';
// import LevelItem from './components/LevelItem';
import ItemDetails from './components/ItemDetails';
import Attribute from './components/Attribute';
// import Graph from './components/Graph';
// import GearItem from './components/GearItem';
import { HERO_CHARACTER, HERO_TRAITS_CODE, HERO_TRAITS_NAME } from './constant';

import '!file-loader?name=[name].[ext]!../../images/price-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/block-bear.png';
import '!file-loader?name=[name].[ext]!../../images/block-bear-p-500.png';
import '!file-loader?name=[name].[ext]!../../images/cancel-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/bear-mask_1bear-mask.png';
import '!file-loader?name=[name].[ext]!../../images/chest.png';
import '!file-loader?name=[name].[ext]!../../images/legs_1legs.png';

import '!file-loader?name=[name].[ext]!../../images/hand-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/emote-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/heart-icon.svg';

import '!file-loader?name=[name].[ext]!../../images/heart-icon-2.svg';
import '!file-loader?name=[name].[ext]!../../images/share-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/hero-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/male-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/dna-icon-white.svg';
import '!file-loader?name=[name].[ext]!../../images/clock-icon-white.svg';

import '!file-loader?name=[name].[ext]!../../images/gift-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/owner-image.jpg';
import '!file-loader?name=[name].[ext]!../../images/circle-dots.svg';
import '!file-loader?name=[name].[ext]!../../images/circle-dots-active.svg';
import '!file-loader?name=[name].[ext]!../../images/tron-icon-red.svg';
import '!file-loader?name=[name].[ext]!../../images/Screen-Shot-2019-05-02.jpg';
import '!file-loader?name=[name].[ext]!../../images/Screen-Shot-2019-05-02-at-10.39.57-PM-p-500.jpeg';
import '!file-loader?name=[name].[ext]!../../images/Screen-Shot-2019-05-02-at-10.39.57-PM-p-800.jpeg';
import '!file-loader?name=[name].[ext]!../../images/Screen-Shot-2019-05-02-at-10.39.57-PM-p-1080.jpeg';
import '!file-loader?name=[name].[ext]!../../images/birthday-icon.svg';
import '!file-loader?name=[name].[ext]!../../images/dough-daddy_1dough-daddy.png';
import '!file-loader?name=[name].[ext]!../../images/margarita_1margarita.png';
import '!file-loader?name=[name].[ext]!../../images/Saucy_1Saucy.png';
import '!file-loader?name=[name].[ext]!../../images/cow_1cow.png';

function ViewCharacter({ accountName, match, tronWebState }) {
  const [state, setState] = useState({
    liked: false,
    showDialog: false,
    price: 0,
    attributes: [],
    gender: '',
    heroData: {},
    id: 0,
  });

  async function getHeroTraits() {
    let traits = [];
    try {
      traits = await hero.getHeroTraits(state.id);
    } catch (err) {
      console.log(err);
    }
    const appearance = [];
    const percentage = [];
    const attributes = [];
    let str = '';
    console.log(traits);
    console.log(HERO_CHARACTER);
    console.log(HERO_TRAITS_NAME);
    for (let i = 0; i < 14; i += 1) {
      appearance[i] = traits[i * 4];
      percentage[i] = 75;
      if (traits[i * 4 + 1] === traits[i * 4]) percentage[i] += 3 / 16;
      if (traits[i * 4 + 2] === traits[i * 4]) percentage[i] += 3 / 64;
      if (traits[i * 4 + 3] === traits[i * 4]) percentage[i] += 1 / 256;
      console.log(
        `${HERO_CHARACTER[i]}: ${HERO_TRAITS_NAME[i][appearance[i]]}`,
      );

      str += HERO_TRAITS_CODE[i][traits[i * 4] % 6];
      str += HERO_TRAITS_CODE[i][traits[i * 4 + 1] % 6];
      str += HERO_TRAITS_CODE[i][traits[i * 4 + 2] % 6];
      str += HERO_TRAITS_CODE[i][traits[i * 4 + 3] % 6];
      attributes.push({
        appearance: HERO_TRAITS_NAME[i][appearance[i]],
        percentage: percentage[i],
      });
    }
    console.log(str);
    let heroData = [];
    try {
      heroData = await hero.getHero(state.id);
      setState({
        ...state,
        heroData,
      });
      setState({
        ...state,
        price: parseInt(heroData.price._hex, 16) / 1000000,
        gender: attributes[0].appearance,
        attributes,
      });
      return appearance;
    } catch (err) {
      console.log(err);
    }
    return 0;
  }
  useEffect(() => {
    console.log('view_character');
    console.log(match.params.id);
    setState({
      ...state,
      id: match.params.id,
    });
    if (tronWebState.installed && tronWebState.loggedIn) {
      console.log('TronlinkTronlinkTronlinkTronlinkTronlinkTronlink');
      setTimeout(() => {
        getHeroTraits();
      }, 100);
    }
  }, [tronWebState]);
  const toggleLiked = e => {
    e.preventDefault();
    setState({
      ...state,
      liked: !state.liked,
    });
  };
  const toggleDialog = e => {
    e.preventDefault();
    setState({
      ...state,
      showDialog: !state.showDialog,
    });
  };
  const closeDialog = () => {
    setState({
      ...state,
      showDialog: false,
    });
  };

  return (
    <div>
      <ShareDialog
        show={state.showDialog}
        toggleDialog={toggleDialog}
        closeDialog={closeDialog}
        isShareItem
      />
      <div className="section view-character-section">
        <div className="item-header">
          {/* <a href="/#" className="for-sale-wrapper w-inline-block">
            <img src="/price-icon.svg" alt="" className="price-icon" />
            <div className="for-sale">For Sale</div>
            <img src="/tron-icon-red.svg" alt="" className="tron-icon" />
            <div className="price">{state.price}</div>
          </a> */}
          <img
            src="/block-bear.png"
            srcSet="/block-bear-p-500.png 500w, /block-bear.png 740w"
            sizes="100vw"
            alt=""
            className="main-item-image"
          />
          <div className="item-podium-selectors">
            <div className="equipped-gear-wrapper">
              <div className="equipped-gear">Equipped Gear</div>
              <div className="equipped-gear-buttons">
                {/* <GearItem isEmpty /> */}
                {/* <GearItem image="/bear-mask_1bear-mask.png" />
                <GearItem image="/chest.png" />
                <GearItem image="/legs_1legs.png" />
                <GearItem image="/hand-icon.svg" isHand /> */}
              </div>
            </div>
          </div>
          <ButtonsWrapper
            liked={state.liked}
            toggleLiked={toggleLiked}
            toggleDialog={toggleDialog}
          />
        </div>
        <div className="container character-info">
          <div className="item-main-info-wrapper">
            <div className="item-details-wrapper">
              <h2 className="item-main-title">Mel Slicksta</h2>
              <ItemDetails
                gender={state.gender}
                id={state.id}
                generation={state.heroData.generation}
                cooldown={state.heroData.cooldownIndex}
              />
              {/* <div className="item-interact-buttons-wrapper-b">
                <FlatButton image="/heart-icon-2.svg">Breed</FlatButton>
                <FlatButton image="/price-icon.svg">Sell</FlatButton>
                <FlatButton image="/gift-icon.svg">Gift</FlatButton>
              </div> */}
            </div>
            <a href="/#" className="owner-info-wrapper w-inline-block">
              <div className="owner-name-wrapper">
                <div className="owner-name">{accountName}</div>
                <div className="owner">Owner</div>
              </div>
              <div className="owner-image-wrapper">
                <img src="/owner-image.jpg" alt="" className="image-3" />
                <img
                  src="/circle-dots.svg"
                  data-w-id="afb5e5de-29a3-a915-6d4a-13cc8c731b57"
                  alt=""
                  className="circle-dots"
                />
                <img
                  src="/circle-dots-active.svg"
                  data-w-id="0e0c5881-1383-619d-9494-bcb3aa90b283"
                  alt=""
                  className="circle-dots-active"
                />
              </div>
            </a>
          </div>
          {/* <PropgressBar
            minLevel="0"
            maxLevel="10"
            currentValue="0"
            maxValue="0"
            percent="0"
          />
          <div className="level-wrapper">
            <h3 className="level">Level</h3>
            <div className="level-number-wrapper">
              <div className="text-block-5">{metaData.level}</div>
            </div>
          </div> */}
          {/* <div className="level-stats-wrapper">
            <LevelItem title="Mojo" value="4.3" />
            <LevelItem
              title="Treasure Hunting Skill"
              value="1.4"
              itemClass="treasure-hunting"
            />
            <LevelItem
              title="Guild Bonus"
              value="2.4"
              itemClass="guild-bonus"
            />
            <LevelItem
              title="Treasure Hunting Skill"
              value="1.4"
              itemClass="drop-chance"
            />
            <LevelItem
              title="Experience Bonus"
              value="20"
              itemClass="xp-bonus"
            />
          </div> */}
          {/* <Graph /> */}
          <div className="bio-title-wrapper">
            <h3 className="bio">Bio</h3>
            <a href="/#" className="info-button w-inline-block">
              <div className="info-i">i</div>
              <div
                data-w-id="6a2664cb-dcd2-6b81-e956-7eb6061176aa"
                className="tooltip-wrapper"
              >
                <div className="text-block-11">
                  The story of each Pizza Hero is unique. They are born in
                  different countries, so they also speak different languages.
                </div>
                <div className="tooltip-arrow-2" />
              </div>
            </a>
          </div>
          <p className="bio-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
            {/* CharacterType: {characterType === TAB_MENU_ITEM_ALL ? 'Item' : ''}{' '}
            {/* {strMetaData} */}
          </p>
          <div className="birthday-wrapper">
            <img
              src="/birthday-icon.svg"
              width="20"
              alt=""
              className="image-7"
            />
            <h3 className="birthday">February 22, 2019</h3>
          </div>
          <div className="attributes-title-wrapper">
            <h3 className="attributes">Attributes</h3>
            <a href="/#" className="info-button w-inline-block">
              <div className="info-i">i</div>
              <div className="tooltip-wrapper">
                <div className="text-block-11">
                  Attributes are the unique genetic traits that determine your
                  Pizza Hero&#x27;s appearance. Attributes marked with a Saucy
                  indicate that your Hero is a direct descendant of a Hero that
                  has a Dough Daddy for that Attribute.
                </div>
                <div className="tooltip-arrow-2" />
              </div>
            </a>
          </div>
          <div className="attributes-wrapper">
            {state.attributes.map((attribute, index) =>
              index > 0 && attribute.appearance !== undefined ? (
                <Attribute
                  image={`https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/attributeid${
                    state.id
                  }.png`}
                  name={attribute.appearance}
                  percent={attribute.percentage}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                />
              ) : (
                <div />
              ),
            )}
          </div>
          {/* <h3 className="parents-heading">Parents</h3>
          <div className="parent-wrapper">
            <div className="parent">
              <div className="parent-title">Mother</div>
              <a href="/#" className="parent-image w-inline-block" />
            </div>
            <div className="parent">
              <div className="parent-title">Father</div>
              <a href="/#" className="parent-image w-inline-block" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

ViewCharacter.propTypes = {
  // metaData: PropTypes.object,
  // characterType: PropTypes.string,
  // id: PropTypes.number,
  accountName: PropTypes.string,
  match: PropTypes.object,
  tronWebState: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  // metaData: makeSelectMetaData(),
  // id: makeSelectId(),
  accountName: makeSelectAccountName(),
  tronWebState: makeSelectTronWebState(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(ViewCharacter);
