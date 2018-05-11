import React from 'react';
import PropTypes from 'prop-types';



class ThumbnailList extends React.Component {
  constructor (props) {
    super(props);
    // this.createList = this.createList.bind(this);
    this.createList2 = this.createList2.bind(this);
  }

  // createList () {
  //   const index = this.props.index;
  //   const picsLength = Object.keys(this.props.pics).length;
  //
  //   const prevImg = this.props.pics[`pic${index - 1}`]['url'];
  //   const currentImg = this.props.pics[`pic${index}`]['url'];
  //   const nextImg = this.props.pics[`pic${index + 1}`]['url'];
  //
  //   return (
  //     <div className="thumbnail-list">
  //       <img className="thumbnail-list-image"
  //         onClick={this.props.clickHandle}
  //         key={this.props.index - 1}
  //         id={this.props.index - 1}
  //         src={prevImg}
  //         alt="thumbnail"
  //       />
  //       <img className="thumbnail-list-image"
  //         onClick={this.props.clickHandle}
  //         key={this.props.index}
  //         id={this.props.index}
  //         src={currentImg}
  //         alt="thumbnail"
  //       />
  //       <img className="thumbnail-list-image"
  //         onClick={this.props.clickHandle}
  //         key={this.props.index + 1}
  //         id={this.props.index + 1}
  //         src={nextImg}
  //         alt="thumbnail"
  //       />
  //     </div>
  //   );
  //
  // }

  createList2 () {
    const list = Object.values(this.props.pics)
      .map((val, index) => {
        return(
          <img key={index} id={index} src={val.url} alt="" onClick={this.props.clickHandle}/>
        );
      });
    const w = window.innerWidth / 2;
    const length = (window.innerWidth >= 450) ? 85 : 50;
    let arr = [];
    for (let i = 0; i < (w / length); i++) {
      arr.push(list[i]);
    }
    return arr;
  }

  render () {
    return(
      <div className="thumbnail-list">
        {this.createList2()}
      </div>
    );
  }
}

ThumbnailList.propTypes = {
  pics: PropTypes.object.isRequired,
  clickHandle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default ThumbnailList;
