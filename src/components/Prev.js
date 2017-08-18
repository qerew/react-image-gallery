import React from 'react';
import PropTypes from 'prop-types';

class Prev extends React.Component {
  render () {
    return (
      <div className="prev">
        <button id="prev" onClick={this.props.prev}>Prev</button>
      </div>
    );
  }
}

Prev.propTypes = {
  prev: PropTypes.func.isRequired
};

export default Prev;
