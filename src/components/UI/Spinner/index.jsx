import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import css from './index.module.scss';

const Spinner = ({ size, type, className }) => (
  <div className={cn(
    css.spinner,
    css[size],
    css[type],
    className,
  )}
  />
);

Spinner.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};
Spinner.defaultProps = {
  size: 'md',
  type: 'fixed',
  className: '',
};

export default Spinner;
