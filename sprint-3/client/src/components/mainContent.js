import React, { Component } from "react";
import HeroVideo from "./mainContent/heroVideo";
import Comments from "./mainContent/comments";
import NextVideo from "./mainContent/nextVideo";
import MovieDescription from "./mainContent/movieDescription";
import axios from "axios";

export default class mainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideVideos: [],
      mainVideo: {},
      videoId: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/videos`).then(res => {
      this.setState({
        sideVideos: res.data,
        videoId: res.data.id
      });

      axios.get(`http://localhost:5000/videos/1af0jruup5gu`).then(res => {
        this.setState({
          mainVideo: res.data[0]
        });
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let id = this.props.match.params.Id;
    if (this.props.match.params.Id !== prevProps.match.params.Id) {
      axios.get(`http://localhost:5000/videos/${id}`).then(res => {
        this.setState({
          mainVideo: res.data[0],
          videoId: res.data.id
        });
      });
    }
  }

  render() {
    return (
      <div>
        <HeroVideo heroVideo={this.state.mainVideo} />
        <div className="main-desktop-flex">
          <div className="main-movie-div">
            <MovieDescription
              movieDescription={this.state.mainVideo && this.state.mainVideo}
            />
            <Comments comments={this.state.mainVideo} />
          </div>
          <NextVideo
            nextVideo={this.state.sideVideos}
            mainVideo={this.state.mainVideo}
          />
        </div>
      </div>
    );
  }
}
