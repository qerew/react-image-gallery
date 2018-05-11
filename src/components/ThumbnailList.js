import PropTypes from "prop-types";
import React from "react";

class ThumbnailList extends React.Component {
  createList = () => {
    const { index } = this.props;
    const picsLength = Object.keys(this.props.pics).length;
    const prevIndex = () => {
      if (index <= 1 || index === 30) {
        return picsLength;
      }
      return index - 1;
    };
    const currentIndex = () => {
      if (index === 0 || index === 30) {
        return 1;
      }
      return index;
    };
    const nextIndex = () => {
      if (index >= picsLength) {
        return 1;
      }
      return index + 1;
    };
    return (
      <div className="thumbnail-list">
        <img
          className="thumbnail-list-image"
          onClick={this.props.clickHandle}
          id={prevIndex()}
          src={this.props.pics[`pic${prevIndex()}`]["url"]}
          alt="thumbnail"
        />
        <img
          className="thumbnail-list-image"
          onClick={this.props.clickHandle}
          id={currentIndex()}
          src={this.props.pics[`pic${currentIndex()}`]["url"]}
          alt="thumbnail"
        />
        <img
          className="thumbnail-list-image"
          onClick={this.props.clickHandle}
          id={nextIndex()}
          src={this.props.pics[`pic${nextIndex()}`]["url"]}
          alt="thumbnail"
        />
      </div>
    );
  };

  render() {
    return <div className="thumbnail-list">{this.createList()}</div>;
  }
}

ThumbnailList.propTypes = {
  pics: PropTypes.object.isRequired,
  clickHandle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default ThumbnailList;
