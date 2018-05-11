import React from 'react';
import PropTypes from 'prop-types';

import PicturePreview from './PicturePreview';
import Modal from './Modal';
import ThumbnailList from './ThumbnailList';
import Prev from './Prev';
import Next from './Next';

class Gallery extends React.Component {
  constructor (props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.generateGridView = this.generateGridView.bind(this);
    this.generateListView = this.generateListView.bind(this);
    this.displayView = this.displayView.bind(this);
    this.changeToGrid = this.changeToGrid.bind(this);
    this.changeToList = this.changeToList.bind(this);
    this.changeDisplayPic = this.changeDisplayPic.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.pictureClickHandler = this.pictureClickHandler.bind(this);

    this.state = {
      showModal: false,
      url: '',
      index: 1
    };

    this.view = 'list';
  }

  openModal (url, e) {
    this.setState({
      showModal: true,
      url: url
    });
  }

  closeModal () {
    this.setState({
      showModal: false,
      url: ''
    });
  }

  generateGridView () {
    return(
      <div className="gallery-grid">
        {Object.values(this.props.pics)
          .map((val, index) => {
            return(
              <PicturePreview key={index} pic={val} openModal={this.openModal} />
            );
          })}
      </div>

    );
  }

  generateListView () {
    return(
      <div className="gallery-list">
        <div className="current-picture">
          <img id="main-pic" src={this.props.pics['pic1']['url']} alt=''/>
        </div>
        <div className="thumbnail-bar">
          <Prev prev={this.prev} />
          <ThumbnailList pics={this.props.pics} clickHandle={this.pictureClickHandler} index={this.state.index}/>
          <Next next={this.next} />
        </div>
      </div>
    );
  }

  changeDisplayPic (url) {
    const pic = document.getElementById('main-pic');
    // If the the new index is more than the amount of pictures we have, set the index to 1 and show the first pic
    if (this.state.index > Object.keys(this.props.pics).length) {
      this.setState({index: 1}, this.changeDisplayPic);
    }
    // If the new index is less than 1, set the index to the last picture and show it
    else if (this.state.index < 1) {
      this.setState({index: Object.keys(this.props.pics).length}, this.changeDisplayPic);
    }
    // Otherwise, update the picture as normal
    else {
      pic.setAttribute('src', this.props.pics[`pic${this.state.index}`]['url']);
    }
  }

  pictureClickHandler (e) {
    const index = Number(e.target.getAttribute('id')) + 1;
    this.setState({index: index}, this.changeDisplayPic);
  }

  next () {
    this.setState({index: this.state.index + 1}, this.changeDisplayPic);
  }

  prev () {
    this.setState({index: this.state.index - 1}, this.changeDisplayPic);
  }

  changeToGrid () {
    const gridBtn = document.getElementById('grid');
    const listBtn = document.getElementById('list');
    listBtn.classList.remove('active-button');
    gridBtn.classList.add('active-button');
    this.view = 'grid';
    this.forceUpdate();
  }

  changeToList () {
    const listBtn = document.getElementById('list');
    const gridBtn = document.getElementById('grid');
    gridBtn.classList.remove('active-button');
    listBtn.classList.add('active-button');
    this.view = 'list';
    this.forceUpdate();
  }

  displayView () {
    if (this.view === 'grid') {
      return this.generateGridView();
    }
    if (this.view ==='list') {
      return this.generateListView();
    }
  }

  render () {
    return (
      <div className="gallery">
        <div className="gallery-view">
          <ul>
            <button id="grid" onClick={this.changeToGrid}><li>
              <i className="fa fa-th" aria-hidden="true"></i>
            </li></button>
            <button id="list" className="active-button" onClick={this.changeToList}><li>
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </li></button>
          </ul>
        </div>

        {this.displayView()}
        <Modal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url}/>

      </div>
    );
  }
}

Gallery.propTypes = {
  pics: PropTypes.object.isRequired
};

export default Gallery;
