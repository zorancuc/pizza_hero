import React from 'react';
import PropTypes from 'prop-types';
import accounting from 'accounting';

export default function ProgressBar({
  minLevel,
  maxLevel,
  currentValue,
  maxValue,
  percent,
}) {
  return (
    <div className="experience-bar">
      <div className="experience-level">
        <div className="percent-and-level">
          <div className="percentage-data-wrapper">
            <div className="max-level">{minLevel}</div>
            <div className="experience-points">
              {accounting.formatNumber(currentValue, 0, ',')}
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        Experience:{' '}
        <span className="experience-percent-amount">{percent}%</span>
      </div>
      <div className="max-level-data-wrapper">
        <div className="percentage-data-wrapper">
          <div className="max-level">{maxLevel}</div>
          <div className="max-points">
            {accounting.formatNumber(maxValue, 0, ',')}
          </div>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  minLevel: PropTypes.number,
  maxLevel: PropTypes.number,
  currentValue: PropTypes.number,
  maxValue: PropTypes.number,
  percent: PropTypes.number,
};
