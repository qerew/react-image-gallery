import PropTypes from "prop-types";
import React from "react";
import Next from "./Next";
import Picture from "./Picture";
import Prev from "./Prev";
import Toggle from "./Toggle";

class Scroll extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 1,
      scroll: false,
      speed: 3000
    };

    this.timer = null;
  }

  next = () => {
    this.setState({ index: this.state.index + 1 }, this.updatePic);
  };

  prev = () => {
    this.setState({ index: this.state.index - 1 }, this.updatePic);
  };

  toggleScroll = () => {
    clearTimeout(this.timer);
    this.setState({ scroll: !this.state.scroll }, () => {
      if (this.state.scroll === true) {
        this.timer = setInterval(this.next, this.state.speed);
      }
    });
  };

  setSpeed = () => {
    clearTimeout(this.timer);
    this.setState(
      { speed: document.querySelector("input").value * 1000 },
      () => {
        if (this.state.scroll)
          this.timer = setInterval(this.next, this.state.speed);
      }
    );
  };

  updatePic = () => {
    const picture = document.querySelector("img");
    // If the the new index is more than the amount of pictures we have, set the index to 1 and show the first pic
    if (this.state.index === Object.keys(this.props.pics).length + 1) {
      this.setState({ index: 1 }, this.updatePic);
    }
    // If the new index is less than 1, set the index to the last picture and show it
    else if (this.state.index === 0) {
      this.setState(
        { index: Object.keys(this.props.pics).length },
        this.updatePic
      );
    }
    // Otherwise, update the picture as normal
    else {
      picture.setAttribute(
        "src",
        this.props.pics[`pic${this.state.index}`]["url"]
      );
    }
  };

  render() {
    return (
      <div className="scroll">
        <Toggle scroll={this.state.scroll} toggle={this.toggleScroll} />
        <div className="scroll-components">
          <Prev prev={this.prev} />
          <Picture speed={this.setSpeed} />
          <Next next={this.next} />
        </div>
      </div>
    );
  }
}

Scroll.propTypes = {
  pics: PropTypes.object.isRequired
};

export default Scroll;
