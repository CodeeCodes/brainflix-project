import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NextVideo extends Component {
	render() {
		console.log(this.props.nextVideo[0]&&this.props.nextVideo[0].id);

		if (
			this.props.nextVideo[0] &&
			this.props.nextVideo[0].id !== this.props.mainVideo &&
			this.props.mainVideo.id
		) {
			return (
				<div className="next__video-main">
					{this.props.nextVideo.length > 0 ? (
						this.props.nextVideo.map((video) => (
							<Link
								to={`/nextvideo/${video.id}`}
								className="next__video"
								key={video.id}
							>
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
						))
					) : (
						<div>Loading</div>
					)}
				</div>
			);
		} else {
			return null;
		}
	}
}
