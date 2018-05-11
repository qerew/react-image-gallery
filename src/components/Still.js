import PropTypes from "prop-types";
import React from "react";
import Gallery from "./Gallery";

class Still extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 1
    };
  }

  render() {
    return (
      <div className="still">
        <Gallery pics={this.props.pics} />
      </div>
    );
  }
}

Still.propTypes = {
  pics: PropTypes.object.isRequired
};

export default Still;
