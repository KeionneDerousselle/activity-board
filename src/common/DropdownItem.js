import React from 'react';
import PropTypes from 'prop-types';

const DropdownItem = ({ name, value, active, onClick }) => {
  let classNames = 'dropdown-item';
  if(active) {
    classNames += ' active';
  }

  return (
    <a
      name={name}
      onClick={() => onClick(name, value)}
      href="#"
      className={classNames}
    >
      {name}
    </a>
  );
};

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default DropdownItem;
