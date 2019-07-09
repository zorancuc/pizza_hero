import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';

import './styles.scss';

export default function Treasure({ prizeTotal }) {
  return (
    <div className="section treasure-section">
      <div className="prizepool-container">
        <h2 data-text="pre-sale exclusive" className="prizepool-title">
          current treasure prizepool
        </h2>
        <div className="prize-total-wrapper">
          <h1 data-text="pre-sale exclusive" className="prize-total">
            ${accounting.formatNumber(prizeTotal, 0, ',')}
          </h1>
        </div>
        <h4 className="prizepool-info">
          10% of chests sales go directly to the players treasure hunting
          prizepool.
          <br />
          <br />
          <strong>Treasure Hunting Launching Summer</strong>
          <br />
        </h4>
      </div>
    </div>
  );
}

Treasure.propTypes = {
  prizeTotal: PropTypes.number,
};
