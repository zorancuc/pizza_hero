import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function LevelItem({ title, value, itemClass }) {
  return (
    <div className={classNames('stat', itemClass || '')}>
      <div>
        {title}: {value}
      </div>
    </div>
  );
}

LevelItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  itemClass: PropTypes.any,
};
