import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';

class Still extends React.Component {
  constructor () {
    super();
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    this.state = {
      index: 1
    };
  }

  next () {
    this.setState({index: this.state.index + 1}, this.updatePic);
  }

  prev () {
    this.setState({index: this.state.index - 1}, this.updatePic);
  }

  updatePic () {
    const picture = document.querySelector('img');
    // If the the new index is more than the amount of pictures we have, set the index to 1 and show the first pic
    if (this.state.index === Object.keys(this.props.pics).length + 1) {
      this.setState({index: 1}, this.updatePic);
    }
    // If the new index is less than 1, set the index to the last picture and show it
    else if (this.state.index === 0) {
      this.setState({index: Object.keys(this.props.pics).length}, this.updatePic);
    }
    // Otherwise, update the picture as normal
    else {
      picture.setAttribute('src', this.props.pics[`pic${this.state.index}`]['url']);
    }
  }

  render () {
    return (
      <div className="still">
        {/*<Prev prev={this.prev}/>*/}
        {/*<img className="picture" src={require('../images/1.jpg')} alt=''/> */}
        <Gallery pics={this.props.pics} />
        {/*<Next next={this.next}/>*/}
      </div>
    );
  }
}

Still.propTypes = {
  pics: PropTypes.object.isRequired
};

export default Still;
