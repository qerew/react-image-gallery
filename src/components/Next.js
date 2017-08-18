import React from 'react';
import PropTypes from 'prop-types';

class Next extends React.Component {
  render () {
    return (
      <div className="next">
        <button id="next" onClick={this.props.next}>Next</button>
      </div>
    );
  }
}

Next.propTypes = {
  next: PropTypes.func.isRequired
};

export default Next;
