import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Dropdown({ onChangePayType }) {
  const [state, setState] = useState({
    dropdown: false,
    selectedItem: 'TRX',
  });
  const toggleDropDown = () => {
    setState({ ...state, dropdown: !state.dropdown });
  };
  const selectItem = item => e => {
    e.preventDefault();
    setState({ ...state, dropdown: false, selectedItem: item });
    onChangePayType(item);
  };

  return (
    <div data-delay="0" className="dropdown w-dropdown">
      <div
        className={classNames('dropdown-toggle', 'w-dropdown-toggle', {
          'w--open': state.dropdown,
        })}
        onClick={toggleDropDown}
      >
        <img
          src="/tron-icon-white.svg"
          width="15"
          alt=""
          className="trx-icon"
        />
        <div className="currency-type">{state.selectedItem}</div>
        <div className="dropdown-arrow w-icon-dropdown-toggle" />
      </div>
      <nav
        className={classNames('dropdown-list', 'w-dropdown-list', {
          'w--open': state.dropdown,
        })}
      >
        <a
          href="/#"
          className={classNames('dropdown-link', 'w-dropdown-link')}
          onClick={selectItem('TRX')}
        >
          TRX
        </a>
        <a
          href="/#"
          className={classNames('dropdown-link', 'w-dropdown-link')}
          onClick={selectItem('EVO')}
        >
          EVO
        </a>
      </nav>
    </div>
  );
}

Dropdown.propTypes = {
  onChangePayType: PropTypes.func,
};
