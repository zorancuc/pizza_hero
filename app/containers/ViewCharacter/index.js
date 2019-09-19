/* eslint-disable no-underscore-dangle */
import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import {
  makeSelectMetaData,
  makeSelectCharacterType,
} from 'containers/MyInventory/selectors';
import {
  TAB_MENU_ITEM_ALL,
  TAB_MENU_ITEM_HEROES,
  // TAB_MENU_ITEM_GEAR,
  // TAB_MENU_ITEM_EMOTES,
  // TAB_MENU_ITEM_CHEST,
} from 'containers/MyInventory/constants';
import ShareDialog from 'components/ShareDialog';
import FlatButton from 'components/buttons/FlatButton';
import ButtonsWrapper from './components/ButtonsWrapper';
import PropgressBar from './components/ProgressBar';
import LevelItem from './components/LevelItem';
import ItemDetails from './components/ItemDetails';
import Attribute from './components/Attribute';
import Graph from './components/Graph';
import GearItem from './components/GearItem';

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

function ViewCharacter({ metaData, characterType }) {
  const [state, setState] = useState({
    liked: false,
    showDialog: false,
  });
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
  let strMetaData;
  if (characterType === TAB_MENU_ITEM_ALL) {
    strMetaData = `ItemType: ${metaData.itemType._hex} ItemRarity: ${
      metaData.itemRarity._hex
    } ItemName: ${metaData.itemName}`;
  } else if (characterType === TAB_MENU_ITEM_HEROES) {
    strMetaData = `MatronId: ${metaData.matronId._hex} SireId: ${
      metaData.sireId._hex
    }`;
  }
  // const { _hex: itemType } = metaData.itemType;
  // const { _hex: itemRarity } = metaData.itemRarity;
  // // const { _hex: matronid } = metaData.matronId;
  // // const { _hex: sireId } = metaData.sireId;
  // const { itemName } = metaData;

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
          <a href="/#" className="for-sale-wrapper w-inline-block">
            <img src="/price-icon.svg" alt="" className="price-icon" />
            <div className="for-sale">For Sale</div>
            <img src="/tron-icon-red.svg" alt="" className="tron-icon" />
            <div className="price">200</div>
          </a>
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
                <GearItem isEmpty />
                <GearItem image="/bear-mask_1bear-mask.png" />
                <GearItem image="/chest.png" />
                <GearItem image="/legs_1legs.png" />
                <GearItem image="/hand-icon.svg" isHand />
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
              <ItemDetails />
              <div className="item-interact-buttons-wrapper-b">
                <FlatButton image="/heart-icon-2.svg">Breed</FlatButton>
                <FlatButton image="/price-icon.svg">Sell</FlatButton>
                <FlatButton image="/gift-icon.svg">Gift</FlatButton>
              </div>
            </div>
            <a href="/#" className="owner-info-wrapper w-inline-block">
              <div className="owner-name-wrapper">
                <div className="owner-name">JR Tellem</div>
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
          <PropgressBar
            minLevel="9"
            maxLevel="10"
            currentValue="300"
            maxValue="10000"
            percent="3"
          />
          <div className="level-wrapper">
            <h3 className="level">Level</h3>
            <div className="level-number-wrapper">
              <div className="text-block-5">9</div>
            </div>
          </div>
          <div className="level-stats-wrapper">
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
          </div>
          <Graph />
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
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere. */}
            {/* CharacterType: {characterType === TAB_MENU_ITEM_ALL ? 'Item' : ''}{' '} */}
            {strMetaData}
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
            <Attribute
              image="/dough-daddy_1dough-daddy.png"
              name="Dough Daddy"
              percent="42"
            />
            <Attribute
              image="/margarita_1margarita.png"
              name="Margarita"
              percent="5.3"
              bgClass="margarita"
            />
            <Attribute
              image="/dough-daddy_1dough-daddy.png"
              name="Hawaiian"
              percent="16"
              bgClass="hawaiian"
            />
            <Attribute
              image="/Saucy_1Saucy.png"
              name="Saucy"
              percent="42"
              bgClass="saucy"
            />
            <Attribute
              image="/cow_1cow.png"
              name="Cow"
              percent="1.2"
              bgClass="cow"
            />
            <Attribute
              image="/dough-daddy_1dough-daddy.png"
              name="Hawaiian"
              percent="16"
              bgClass="hawaiian"
            />
            <Attribute
              image="/dough-daddy_1dough-daddy.png"
              name="Dough Daddy"
              percent="42"
            />
          </div>
          <h3 className="parents-heading">Parents</h3>
          <div className="parent-wrapper">
            <div className="parent">
              <div className="parent-title">Mother</div>
              <a href="/#" className="parent-image w-inline-block" />
            </div>
            <div className="parent">
              <div className="parent-title">Father</div>
              <a href="/#" className="parent-image w-inline-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewCharacter.propTypes = {
  metaData: PropTypes.object,
  characterType: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  metaData: makeSelectMetaData(),
  characterType: makeSelectCharacterType(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(ViewCharacter);
