import React, { useState } from 'react';

export default function Dropdown() {
  const [state, setState] = useState({
    showDropdown: false,
    selectedMenu: 'Most Recent',
  });
  const toggleDropdown = () => {
    setState({
      ...state,
      showDropdown: !state.showDropdown,
    });
  }
  const selectMenu = menu => e => {
    e.preventDefault();
    setState({
      ...state,
      selectedMenu: menu,
      showDropdown: false,
    });
  }

  return (
    <div data-delay="0" id="w-node-bcb002c8ce21-9acf37c8" className="dropdown-2 w-dropdown">
      <div onClick={toggleDropdown} className="sorting-dropdown-toggle w-dropdown-toggle">
        <div className="down-arrow-icon w-icon-dropdown-toggle" />
        <div>{state.selectedMenu}</div>
      </div>
      {state.showDropdown &&
        <nav className="sorting-dropdown-list w-dropdown-list w--open">
          <a href="#" className="dropdown-link w-dropdown-link" onClick={selectMenu('Most Recent')}>Most Recent</a>
          <a href="#" className="dropdown-link w-dropdown-link" onClick={selectMenu('Most Relevant')}>Most Relevant</a>
          <a href="#" className="dropdown-link w-dropdown-link" onClick={selectMenu('Price High to Low')}>Price High to Low</a>
          <a href="#" className="dropdown-link w-dropdown-link" onClick={selectMenu('Price Low to High')}>Price Low to High</a>
        </nav>
      }
    </div>
  );
}
