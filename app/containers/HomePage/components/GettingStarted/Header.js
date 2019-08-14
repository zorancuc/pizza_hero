import React from 'react';

export default function Header() {
  return (
    <div className="getting-started-title-wrapper">
      <img
        src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-left.png"
        srcSet="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-left-p-500.png 500w, https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-left.png 546w"
        sizes="100vw"
        alt=""
        className="divider"
      />
      <h2 className="getting-started-title">Gettings Started</h2>
      <img
        src="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-right.png"
        srcSet="https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-right-p-500.png 500w, https://storage.googleapis.com/geometric-watch-246204.appspot.com/images/divider-right.png 546w"
        sizes="100vw"
        alt=""
        className="divider"
      />
    </div>
  );
}
