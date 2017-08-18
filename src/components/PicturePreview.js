import React from 'react';
import PropTypes from 'prop-types';

class PicturePreview extends React.Component {
  render () {
    return (
      <div className="picture-preview">
        <a href={this.props.pic.url}>
          <img className="thumbnail" src={this.props.pic.url} alt="thumbnail"/>
        </a>
      </div>
    );
  }
}

PicturePreview.propTypes = {
  pic: PropTypes.object.isRequired,
};

export default PicturePreview;
