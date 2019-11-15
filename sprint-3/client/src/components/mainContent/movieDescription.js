import React, { Component } from "react";
import Views from "../../assets/Icons/svg/Icon-views.svg";
import Likes from "../../assets/Icons/svg/Icon-likes.svg";

export default class MovieDescription extends Component {
  render() {
    let timeStamp = this.props.movieDescription.timestamp;
    var toDate = new Date(timeStamp).getDate();
    var toMonth = new Date(timeStamp).getMonth() + 1;
    var toYear = new Date(timeStamp).getFullYear();
    var originalDate = toMonth + "/" + toDate + "/" + toYear;

    return (
      <div className="movie__description">
        <h1 className="movie__heading">
          {this.props.movieDescription.title &&
            this.props.movieDescription.title}
        </h1>

        <h3 className="movie__heading-two">
          By{" "}
          {this.props.movieDescription && this.props.movieDescription.channel}
        </h3>
        <h3 className="movie__heading-two-special">{originalDate}</h3>
        <div className="movie__icons-div">
          <img src={Views} alt="views icon" className="movie__icons" />
          <h3 className="movie__heading-three">
            {this.props.movieDescription && this.props.movieDescription.views}
          </h3>
        </div>
        <div className="movie__icons-div">
          <img src={Likes} alt="likes icon" className="movie__icons" />
          <h3 className="movie__heading-three">
            {this.props.movieDescription && this.props.movieDescription.likes}
          </h3>
        </div>
        <div className="movie__paragraph">
          <p className="movie__paragraph-text">
            {this.props.movieDescription &&
              this.props.movieDescription.description}
          </p>
        </div>
      </div>
    );
  }
}
