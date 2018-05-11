import PropTypes from "prop-types";
import React from "react";

class Picture extends React.Component {
  render() {
    return (
      <div className="picture">
        <input
          id="speed"
          onChange={this.props.speed}
          type="range"
          min="1"
          max="5"
          defaultValue="3"
        />
        <img src={require("../images/1.jpg")} alt="" />
      </div>
    );
  }
}

Picture.propTypes = {
  speed: PropTypes.func.isRequired
};

export default Picture;
