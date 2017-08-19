import React from 'react';
import PropTypes from 'prop-types';

import PicturePreview from './PicturePreview';
import Modal from './Modal';

class Gallery extends React.Component {
  constructor (props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      showModal: false,
      url: ''
    };
  }

  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
      url: ''
    });
  }

  render () {
    return (
      <div className="gallery">
        <div className="gallery-grid">
          {Object.values(this.props.pics)
            .map((val, index) => {
              return(
                <PicturePreview key={index} pic={val} openModal={this.openModal} />
              );
            })}
        </div>
        <Modal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url}/>
      </div>
    );
  }
}

Gallery.propTypes = {
  pics: PropTypes.object.isRequired,
};


export default Gallery;
