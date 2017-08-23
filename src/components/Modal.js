import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render () {
    if (this.props.isOpen === false) {
      return null;
    }
    return(
      <div  className='modal-overlay' onClick={this.props.onClick} >
        <div className='modal-body'>
          <button className='modal-close' onClick={this.props.onClick}><span className='fa fa-times'></span></button>
          <img src={this.props.src} alt="Full size"/>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Modal;
