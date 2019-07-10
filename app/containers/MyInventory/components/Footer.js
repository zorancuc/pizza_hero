import React from 'react';

export default function Footer() {
  return (
    <div className="view-profile-and-page-links">
      <a href="#" className="view-your-profile-button w-inline-block">
        <div className="button-gradient">
          <div className="button-text">view your profile</div>
        </div>
      </a>
      <div className="page-links-wrapper">
        <a href="#" className="page-link">&lt; Previous</a>
        <a href="#" className="page-link">Next &gt;</a>
      </div>
    </div>
  );
}
