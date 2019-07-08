import React from 'react';

export default function SubMenuMobile() {
  return (
    <div className="sub-menu-wrapper mobile">
      <a
        href="index.html"
        className="sub-menu-link mobile w-inline-block w--current"
      >
        <div className="sub-menu-text">pre-order</div>
      </a>
      <a
        href="my-inventory.html"
        className="sub-menu-link mobile w-inline-block"
      >
        <div className="sub-menu-text">my-inventory</div>
      </a>
      <a href="/#" className="sub-menu-link last-sub-menu-item w-inline-block">
        <div className="sub-menu-text">guides</div>
      </a>
    </div>
  );
}
