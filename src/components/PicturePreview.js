import PropTypes from "prop-types";
import React from "react";

class PicturePreview extends React.Component {
  render() {
    const { pic, openModal } = this.props;

    return (
      <div className="picture-preview">
        <img
          className="thumbnail"
          src={pic.url}
          alt="thumbnail"
          onClick={e => openModal(pic.url, e)}
        />
      </div>
    );
  }
}

PicturePreview.propTypes = {
  pic: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default PicturePreview;
