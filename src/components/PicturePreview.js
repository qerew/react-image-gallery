import React from 'react';
import PropTypes from 'prop-types';

class PicturePreview extends React.Component {
  render () {
    return (
      <div className="picture-preview">
        <img className="thumbnail"
          src={this.props.pic.url}
          alt="thumbnail"
          onClick={(e) => this.props.openModal(this.props.pic.url, e)}
        />
        <p>
          <a className="full-size" href={this.props.pic.url}>Full Size</a>
        </p>
      </div>
    );
  }
}

PicturePreview.propTypes = {
  pic: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired
};

export default PicturePreview;
