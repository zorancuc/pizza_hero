import React from 'react';

export default function Details() {
  return (
    <div className="container character-info">
      <div className="item-main-info-wrapper">
        <div className="item-details-wrapper">
          <h2 className="item-main-title">Fancy Crown</h2>
          <div className="item-details">
            <div className="item-detail">
              <div className="detail-icon-wrapper">
                <div className="number-icon">#</div>
              </div>
              <div className="item-detail-text">
                148/4500 <span className="items-remaining">(32 Remaining)</span>
              </div>
            </div>
            <div className="item-detail-separator">/</div>
            <div className="item-kind">Kind: Gear</div>
            <div className="item-detail-separator">/</div>
            <div className="item-rarity">Raritiy: Epic</div>
          </div>
          <div className="item-interact-buttons-wrapper-b">
            <a href="#" className="item-interact-button-b w-inline-block">
              <img
                src="/price-icon.svg"
                width="20"
                alt=""
                className="image-4"
              />
              <div>Sell</div>
            </a>
            <a href="#" className="item-interact-button-b w-inline-block">
              <img src="/gift-icon.svg" width="20" alt="" className="image-4" />
              <div>Gift</div>
            </a>
            <a href="#" className="item-interact-button-b last w-inline-block">
              <div>Equip</div>
            </a>
          </div>
        </div>
        <a href="#" className="owner-info-wrapper w-inline-block">
          <div className="owner-name-wrapper">
            <div className="owner-name">JR Tellem</div>
            <div className="owner">Owner</div>
          </div>
          <div className="owner-image-wrapper">
            <img src="/owner-image.jpg" alt="" className="image-3" />
            <img src="/circle-dots.svg" alt="" className="circle-dots" />
            <img
              src="/circle-dots-active.svg"
              alt=""
              className="circle-dots-active"
            />
          </div>
        </a>
      </div>
      <h3 className="requirements">Requirements</h3>
      <ul className="requirements-list">
        <li>
          <p>Level 10</p>
        </li>
        <li>
          <p>Margarita Eyes</p>
        </li>
      </ul>
      <div className="item-percents-wrapper">
        <h3 className="item-percents">Stat Boost: 10%</h3>
        <h3 className="item-percents-divider">/</h3>
        <h3 className="item-percents pink-text">Drop Bonus: 3%</h3>
        <h3 className="item-percents-divider">/</h3>
        <h3 className="item-percents purple-text">Mojo: +2%</h3>
      </div>
      <h3 className="description-header">Description</h3>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <h3 className="equipped-on-header">Currently Equipped On</h3>
      <a href="#" className="equipped-character w-inline-block" />
    </div>
  );
}
