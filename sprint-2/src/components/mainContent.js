import React, { Component } from "react";
import HeroVideo from "./mainContent/heroVideo";
import Comments from "./mainContent/comments";
import NextVideo from "./mainContent/nextVideo";
import MovieDescription from "./mainContent/movieDescription";
import axios from "axios";

export default class mainContent extends Component {
	state = {
		sideVideos: [],
		mainVideo: {},
		videoId: ""
	};

	componentDidMount() {
		axios
			.get(
				`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0`
			)
			.then((res) => {
				// 	console.log(res.data);
				this.setState({
					mainVideo: res.data
				});
			});
		axios
			.get(
				`https://project-2-api.herokuapp.com/videos?api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0`
			)
			.then((res) => {
				// console.log(res.data);
				this.setState({
					sideVideos: res.data,
					videoId: res.data.id
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevState.mainVideo.id);
		console.log(this.state.mainVideo.id);
		if (
			this.state.mainVideo.id &&
			this.state.mainVideo.id !== prevState.mainVideo.Id &&
			prevState.mainVideo.id
		) {
			axios
				.get(
					`https://project-2-api.herokuapp.com/videos/${this.state.sideVideos[1].id}?api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0`
				)
				.then((res) => {
					this.setState({
						mainVideo: res.data
					});
				});
		}
	}

	render() {
		// console.log(this.state);
		return (
			<div>
				<HeroVideo heroVideo={this.state.mainVideo} />
				<div className="main-desktop-flex">
					<div className="main-movie-div">
						<MovieDescription movieDescription={this.state.mainVideo} />
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
