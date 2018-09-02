import React from 'react';
import PropTypes from 'prop-types';

import css from './index.module.scss';

const Header = () => (
  <header className={css.header}>
    <div className={css.inner}>Header</div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
