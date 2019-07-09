import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';

import './styles.scss';

export default function Treasure({ prizeTotal }) {
  return (
    <div class="section treasure-section">
      <div class="prizepool-container">
        <h2 data-text="pre-sale exclusive" class="prizepool-title">current treasure prizepool</h2>
        <div class="prize-total-wrapper">
          <h1 data-text="pre-sale exclusive" class="prize-total">${accounting.formatNumber(prizeTotal, 0, ',')}</h1>
          <div class="w-embed">
          </div>
        </div>
        <h4 class="prizepool-info">10% of chests sales go directly to the players treasure hunting prizepool.
          <br /><br />
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
