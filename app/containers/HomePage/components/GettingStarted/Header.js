import React from 'react';

export default function Header() {
  return (
    <div className="getting-started-title-wrapper">
      <img
        src="images/divider-left.png"
        srcSet="/divider-left-p-500.png 500w, /divider-left.png 546w"
        sizes="100vw"
        alt=""
        className="divider"
      />
      <h2 className="getting-started-title">Gettings Started</h2>
      <img
        src="images/divider-right.png"
        srcSet="/divider-right-p-500.png 500w, /divider-right.png 546w"
        sizes="100vw"
        alt=""
        className="divider"
      />
    </div>
  );
}
