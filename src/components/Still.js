import React from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';


class Still extends React.Component {
  constructor () {
    super();


    this.state = {
      index: 1
    };
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
