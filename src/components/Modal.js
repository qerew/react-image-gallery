import PropTypes from "prop-types";
import React from "react";

class Modal extends React.Component {
  render() {
    const { isOpen, onClick, src } = this.props;

    if (!isOpen) {
      return null;
    }
    return (
      <div className="modal-overlay" onClick={onClick}>
        <div className="modal-body">
          <button className="modal-close" onClick={onClick}>
            <span className="fa fa-times" />
          </button>
          <img src={src} alt="Full size" />
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
