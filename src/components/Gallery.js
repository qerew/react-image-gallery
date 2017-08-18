import React from 'react';
import PropTypes from 'prop-types';

import PicturePreview from './PicturePreview';

class Gallery extends React.Component {
  render () {
    return (
      <div className="gallery">
        <div className="gallery-grid">
          {Object.values(this.props.pics)
            .map((val, index) => <PicturePreview key={index} pic={val} />)}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  pics: PropTypes.object.isRequired,
};


export default Gallery;
