import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  render () {
    return (
      <div className="settings">
        <button id="toggle" onClick={this.props.toggle}>
          {this.props.scroll? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  scroll: PropTypes.bool.isRequired
};
export default Toggle;
