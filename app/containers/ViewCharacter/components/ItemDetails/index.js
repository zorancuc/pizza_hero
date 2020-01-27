import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

// export default function ItemDetails({ gender, id, generation, cooldown }) {
export default function ItemDetails({ gender, id, generation }) {
  return (
    <div className="item-details">
      <Item title="Hero" image="/hero-icon-white.svg" />
      <Item title={gender} image="/male-icon-white.svg" />
      <Item title={id} />
      <Item title={`Gen ${generation}`} image="/dna-icon-white.svg" />
      {/* <Item
        title={`Sluggish Cooldown ${cooldown}`}
        image="/clock-icon-white.svg"
      /> */}
    </div>
  );
}

ItemDetails.propTypes = {
  gender: PropTypes.string,
  id: PropTypes.number,
  generation: PropTypes.number,
  // cooldown: PropTypes.number,
};
