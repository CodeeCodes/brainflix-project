import React, { Component } from "react";

export default class Hero extends Component {
  render() {
 
    return (
      <div className="hero">
        <video
          poster={this.props.heroVideo.image && this.props.heroVideo.image}
          controls
          className="hero__video"
        ></video>
      </div>
    );
  }
}
