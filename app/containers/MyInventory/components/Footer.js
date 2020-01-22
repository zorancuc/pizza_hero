import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { changeCurrentPage } from '../actions';

export function Footer({ onChangeCurrentPage }) {
  // const [state, setState] = useState({
  //   curPage: 0,
  // });

  const prevPage = e => {
    e.preventDefault();
    console.log('prev');
    onChangeCurrentPage(0);
  };

  const nextPage = e => {
    e.preventDefault();
    console.log('next');
    onChangeCurrentPage(1);
  };
  return (
    <div className="view-profile-and-page-links">
      <a href="/#" className="view-your-profile-button w-inline-block">
        <div className="button-gradient">
          <div className="button-text">view your profile</div>
        </div>
      </a>
      <div className="page-links-wrapper">
        <a onClick={prevPage} href="/#" className="page-link">
          &lt; Previous
        </a>
        <a onClick={nextPage} href="/#" className="page-link">
          Next &gt;
        </a>
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: changePage => {
      dispatch(changeCurrentPage(changePage));
    },
  };
}

Footer.propTypes = {
  onChangeCurrentPage: PropTypes.func,
};

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Footer);
