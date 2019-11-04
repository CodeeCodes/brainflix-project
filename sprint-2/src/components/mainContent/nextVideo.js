import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class NextVideo extends React.Component {
	state = {
		mainVideo: []
	};
	componentDidMount() {
		axios
			.get(
				`https://project-2-api.herokuapp.com/videos?api_key=f7d8957a-1a18-4efc-b63a-22a6b2c06be0`
			)
			.then((res) => {
				// console.log(res.data);
				this.setState({ mainVideo: res.data });
			});
	}

	render() {
		return (
			<div className="next__video-main">
				{this.state.mainVideo &&
					this.state.mainVideo.map((video) => (
						<Link to={`/nextVideo/${video.id}`} className="next__video">
							<img
								src={video.image}
								alt="next video"
								className="next__video-image"
							/>
							<div className=" next__video-info">
								<h5 className="next__video-heading-bold">{video.title}</h5>
								<h5 className="next__video-heading">{video.channel}</h5>
							</div>
						</Link>
					))}
			</div>
		);
	}
}
