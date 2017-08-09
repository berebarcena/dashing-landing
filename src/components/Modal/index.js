import React from 'react';
import PropTypes from 'prop-types';

export default function Modal(props) {
  return props.isOpen ?
    <div className="modal">
      {props.children}
    </div>
    :
    null

}

Modal.propTypes = {
  isOpen: PropTypes.bool,
};