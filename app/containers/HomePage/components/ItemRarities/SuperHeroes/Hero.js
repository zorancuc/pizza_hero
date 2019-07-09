import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Hero({
  name,
  image,
  rarity,
  generation,
  chance,
  notDiscovered,
  last,
}) {
  return (
    <div className={classNames('super-hero-wrapper', { 'last-hero': last })}>
      <img src={image} alt="" className="super-hero-image" />
      <h4
        className={classNames('super-hero-name', {
          'not-yet-discovered': notDiscovered,
        })}
      >
        {name}
      </h4>
      {!notDiscovered && (
        <div className="item-info-wrapper">
          <div className="rarity red">{rarity}</div>
          <div className="separator">/</div>
          <div className="generation">Gen {generation}</div>
          <div className="separator">/</div>
          <div className="chance">{chance}% Chance</div>
        </div>
      )}
      <div className="how-many-discovered">1/3 discovered</div>
      {notDiscovered && (
        <a href="/#" className="discover-button-wrapper w-inline-block">
          <div className="button-gradient">
            <div className="discover-text">discover</div>
          </div>
        </a>
      )}
    </div>
  );
}

Hero.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rarity: PropTypes.string,
  generation: PropTypes.number,
  chance: PropTypes.number,
  notDiscovered: PropTypes.bool,
  last: PropTypes.bool,
};
